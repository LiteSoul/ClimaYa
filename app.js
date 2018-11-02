//init api
const api = new Api()
//init ui
const ui = new UI()
//populate ip and weather data, and send it to ui
//to wait till dom load document.addEventListener('DOMContentLoaded', api.popNsend())
api.popNsend()
//init skycons
const skycons = new Skycons({ "color": "black" })
skycons.play()
