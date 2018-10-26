class UI {
	constructor() {
		this.div1 = document.getElementById('div1')
		this.div2 = document.getElementById('div2')
	}

	display(ip, weather) {
		this.div1.innerHTML = ip.city
		this.div2.innerHTML = weather.hourly.summary
	}
}