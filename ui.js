class UI {
	constructor() {
		this.location = document.getElementById('location')
		this.now = document.getElementById('now')
		this.today = document.getElementById('today')
		this.week = document.getElementById('week')
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
	}
}