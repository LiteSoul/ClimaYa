class UI {
	constructor() {
		this.location = document.getElementById('location')
		this.currentDegree = document.getElementById('current-degree')
		this.current = document.getElementById('current')
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
			➤ ${ip.city}
		`
		this.currentDegree.innerHTML = `
			Ahora ${Math.round(weather.currently.temperature)}º (sensación ${Math.round(weather.currently.apparentTemperature)}º)
		`
		this.current.textContent = weather.currently.summary
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
		const upper = weather.currently.icon.toUpperCase()
		const final = upper.replace('-', '_')
		const skyconsType = 'Skycons.' + final
		console.log(skyconsType)
		skycons.add(document.getElementById("icon2"), skyconsType);
		skycons.play();
		skycons.set("icon1", skyconsType);

		if (weather) {
			this.spinner.classList.add('hidden')
			this.content.classList.remove('hidden')
		}
	}
}