//init api
const api = new Api()
//init ui
const ui = new UI()
//populate ip and weather data, and send it to ui
// document.addEventListener('DOMContentLoaded', api.popNsend())
api.popNsend()

const skycons = new Skycons({ "color": "black" });
