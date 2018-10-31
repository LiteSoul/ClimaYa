class UI {
	constructor() {
		this.location = document.getElementById('location')
		this.now = document.getElementById('now')
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
		this.now.innerHTML = `
			<small>Ahora</small>${weather.currently.summary}
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