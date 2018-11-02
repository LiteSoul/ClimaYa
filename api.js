class Api {
	constructor() {
		this.darkSkyKey = '5056977b57b41fa41e56a32728a674e5'
		this.coords
		this.weather
	}

	//get ip location
	async getLocation() {
		const fetchIP = await fetch('https://ipinfo.io/json')
		//alternative https://ipapi.co/json/
		const response = await fetchIP.json()
		return response
	}

	//get weather data by sending location
	async getWeather(coords) {
		const loc = coords.loc.split(',')
		const fetchWeather = await fetch(`
			https://cors-anywhere.herokuapp.com/
			https://api.darksky.net/forecast/${this.darkSkyKey}/${loc[0]},${loc[1]}
			?lang=es&units=si&exclude=flags,minutely
		`)
		//in the case of santa fe is this url:
		//https://api.darksky.net/forecast/5056977b57b41fa41e56a32728a674e5/-31.6333,-60.7?lang=es&units=si&exclude=flags,minutely
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
