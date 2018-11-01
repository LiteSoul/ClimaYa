class UI {
	constructor() {
		this.location = document.getElementById('location')
		this.current = document.getElementById('current')
		this.currentDegree = document.getElementById('current-degree')
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
		this.currentDegree.innerHTML = `
			Temp ${Math.round(weather.currently.temperature)}º (sensación ${Math.round(weather.currently.apparentTemperature)}º)
		`

		//today
		this.today.innerHTML = `
		<small>Hoy ${Math.round(weather.currently.temperature)}º</small>${weather.hourly.summary}
		`
		this.todayDegree.innerHTML = `
			Hoy min ${Math.round(weather.daily.data[0].temperatureLow)}º, max ${Math.round(weather.daily.data[0].temperatureHigh)}º
		`
		this.today.textContent = weather.hourly.summary
		weather.currently.precipProbability >= 0.1
			? this.todayRain.innerHTML = `
			Prob de lluvia ${Math.round(weather.daily.data[0].precipProbability * 10)}%, cantidad ${Math.round(weather.daily.data[0].precipIntensity)}mm
		`
			: this.todayRain.innerHTML = `Sin probabilidades de lluvia`

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
}