class UI {
	constructor() {
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
	}

	display(ip, weather) {
		//city lacation
		this.location.textContent = ip.city
		this.location.innerHTML = `
			➤ ${ip.city}
		`
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

		var timenow = weather.currently.time * 1000
		console.log(timenow)
		var date = new Date(timenow)
		console.log(date)
		var hours = date.getHours()
		console.log(hours + 'ahora')

		var timenow0 = weather.hourly.data[0].time * 1000
		console.log(timenow0)
		var date0 = new Date(timenow0)
		console.log(date0)
		var hours = date0.getHours()
		console.log(hours + 'hs')

	}
}