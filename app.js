//1 get location
async function getLocation() {
	const fetchIP = await fetch('http://ip-api.com/json')
	const response = await fetchIP.json()
	// return { 'lat': response.lat, 'lon': response.lon }
	return response
}

//2 get weather data by sending location

async function getWeather() {
	const getCoords = await getLocation()
	const darkSkyKey = '5056977b57b41fa41e56a32728a674e5'

	const fetchWeather = await fetch(
		`https://api.darksky.net/forecast/${darkSkyKey}/${getCoords.lat},${getCoords.lon}?format=jsonp`,
		{ mode: 'cors' }
	)
	// const response = await fetchWeather.json()
	// console.log(response)
	console.log(fetchWeather)
	// return response
}

getWeather()

//this test console logs env var of api url, plus the coords
async function test() {
	const getCoords = await getLocation()
	const fullURL = `${process.env.API_URL}/${getCoords.lat},${getCoords.lon}`
	console.log(fullURL)
}

test()


