//1 get location
async function getLocation() {
	const fetchIP = await fetch('http://ip-api.com/json')
	const response = await fetchIP.json()
	// return { 'lat': response.lat, 'lon': response.lon }
	return response
}

//2 get weather data by sending location

async function getWeather() {
	// const getCoords = await getLocation()
	const darkSkyKey = '5056977b57b41fa41e56a32728a674e5'

	// const fetchWeather = await fetch(
	// 	`https://api.darksky.net/forecast/${darkSkyKey}/${getCoords.lat},${getCoords.lon}`, function (forecast) { })


	const fetchWeather = await fetch(
		`https://api.darksky.net/forecast/${darkSkyKey}/42.9150,-77.784323`, function (forecast) { })
	// const response = await fetchWeather.json()
	// console.log(response)
	console.log(forecast)
	console.log(fetchWeather)
	// return response
}

getWeather()

