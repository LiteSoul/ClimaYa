//1 get location
async function getLocation() {
	const fetchIP = await fetch('http://ip-api.com/json')
	const response = await fetchIP.json()
	return response
}

const getCoords = () => {
	getLocation().then(location => console.log(location))
}

console.log(getCoords())


//1b async version


//2 get weather data by sending location

//