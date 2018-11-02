class UI {
	constructor() {
		this.ip = {}
		this.weather = {}
		this.location = document.getElementById('location')
		this.current = document.getElementById('current')
		this.currentDegree = document.getElementById('current-degree')
		this.currentDegreeST = document.getElementById('current-degree-st')
		this.today = document.getElementById('today')
		this.todayDegree = document.getElementById('today-degree')
		this.todayRain = document.getElementById('today-rain')
		this.week = document.getElementById('week')
		this.spinner = document.getElementById('spinner')
		this.content = document.getElementById('content')
		this.hours = document.getElementById('hours')
	}

	display(ip, weather) {
		//send data to constructor
		this.ip = ip
		this.weather = weather

		this.cityLocation()
		this.eachHour()
		this.showWeather()
	}

	cityLocation() {
		const ip = this.ip
		//city lacation
		this.location.textContent = ip.city
		this.location.innerHTML = `
		➤ ${ip.city}
	`
	}

	showWeather() {
		const weather = this.weather

		//current weather
		this.current.textContent = weather.currently.summary
		this.currentDegree.textContent = Math.round(weather.currently.temperature) + 'º'
		this.currentDegreeST.textContent = '(' + Math.round(weather.currently.apparentTemperature) + 'º ST)'
		//today
		this.today.innerHTML = `
		<small>Hoy ${Math.round(weather.currently.temperature)}º</small>${weather.hourly.summary}
		`
		this.todayDegree.innerHTML = `
			Hoy min ${Math.round(weather.daily.data[0].temperatureLow)}º, max ${Math.round(weather.daily.data[0].temperatureHigh)}º
		`
		this.today.textContent = weather.hourly.summary
		this.todayRain.innerHTML = `
			Prob de lluvia ${Math.round(weather.daily.data[0].precipProbability * 10)}%, cantidad ${Math.round(weather.daily.data[0].precipIntensity)}mm
		`

		//this week
		this.week.textContent = weather.daily.summary

		//get relevant skycon
		skycons.set("icon", weather.currently.icon)

		//show spinner until data is received
		if (weather) {
			this.spinner.classList.add('hidden')
			this.content.classList.remove('hidden')
		}
	}

	eachHour() {
		const weather = this.weather

		weather.hourly.data.forEach(each => {
			const date = new Date(each.time * 1000)
			const hour = date.getHours() + 'hs'
			const hourNode = document.createElement('p')
			const hourText = document.createTextNode(hour)
			hourNode.appendChild(hourText)
			this.hours.appendChild(hourNode)
		})
	}
}