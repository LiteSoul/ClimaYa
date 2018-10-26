//1 get location
async function getLocation() {
	const fetchIP = await fetch('https://ipapi.co/json/')
	const response = await fetchIP.json()
	console.log(response)
	return response
}

//2 get weather data by sending location

async function getWeather() {
	const getCoords = await getLocation()
	const darkSkyKey = '5056977b57b41fa41e56a32728a674e5'

	const fetchWeather = await fetch(
		//`https://cors.io/?https://api.darksky.net/forecast/${darkSkyKey}/42.9150,-77.784323`
		`https://cors.io/?https://api.darksky.net/forecast/${darkSkyKey}/${getCoords.latitude},${getCoords.longitude}`
	)
	const response = await fetchWeather.json()
	// const response = await fetchWeather.json()
	// console.log(response)
	console.log(response)
	// return response
}

getWeather()

