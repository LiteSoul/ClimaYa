class Api {
	constructor() {
		this.darkSkyKey = '5056977b57b41fa41e56a32728a674e5'
		this.coords
		this.weather
	}

	//get ip location
	async getLocation() {
		const fetchIP = await fetch('https://ipapi.co/json/')
		const response = await fetchIP.json()
		return response
	}

	//get weather data by sending location
	async getWeather(coords) {
		const fetchWeather = await fetch(`
			https://cors.io/?https://api.darksky.net/forecast/${this.darkSkyKey}/${coords.latitude},${coords.longitude}
				?lang=es&?units=auto?exclude=minutely
		`)
		const response = await fetchWeather.json()
		return response
	}

	//populate data and send it to ui
	async popNsend() {
		this.coords = await this.getLocation()
		console.log(this.coords)
		this.weather = await this.getWeather(this.coords)
		console.log(this.weather)
		ui.display(this.coords, this.weather)
	}

}
