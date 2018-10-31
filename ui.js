class UI {
	constructor() {
		this.location = document.getElementById('location')
		this.nowDegree = document.getElementById('now-degree')
		this.now = document.getElementById('now')
		this.todayDegree = document.getElementById('today-degree')
		this.today = document.getElementById('today')
		this.week = document.getElementById('week')
		this.icon = document.getElementById('icon')
		this.spinner = document.getElementById('spinner')
		this.content = document.getElementById('content')
	}

	display(ip, weather) {
		this.location.textContent = ip.city
		this.location.innerHTML = `
			<i class="fas fa-map-marker-alt"></i> ${ip.city}
		`
		this.nowDegree.innerHTML = `
			Ahora ${Math.round(weather.currently.temperature)}º (sensación ${Math.round(weather.currently.apparentTemperature)}º)
		`
		this.now.textContent = weather.currently.summary
		this.today.innerHTML = `
		<small>Hoy ${Math.round(weather.currently.temperature)}º</small>${weather.hourly.summary}
		`
		this.todayDegree.innerHTML = `
			Hoy min ${Math.round(weather.daily.data[0].temperatureLow)}º, max ${Math.round(weather.daily.data[0].temperatureHigh)}º
		`
		this.today.textContent = weather.hourly.summary
		this.week.textContent = weather.daily.summary
		this.icon.src = `
			https://darksky.net/images/weather-icons/${weather.currently.icon}.png
		`

		if (weather) {
			this.spinner.classList.add('hidden')
			this.content.classList.remove('hidden')
		}
	}
}