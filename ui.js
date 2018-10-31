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
		this.location.innerText = ip.city
		this.location.innerHTML = `
			<i class="fas fa-map-marker-alt"></i>
			${ip.city}
		`
		this.now.innerText = weather.currently.summary
		this.today.innerText = weather.hourly.summary
		this.week.innerText = weather.daily.summary
		this.icon.src = `https://darksky.net/images/weather-icons/${weather.currently.icon}.png`

		if (weather) {
			this.spinner.classList.add('hidden')
			this.content.classList.remove('hidden')
		}
	}
}