//init api
const api = new Api()
//init ui
const ui = new UI()
//populate ip and weather data, and send it to ui
// document.addEventListener('DOMContentLoaded', api.popNsend())
api.popNsend()

var skycons = new Skycons({ "color": "pink" });
// on Android, a nasty hack is needed: {"resizeClear": true}

// you can add a canvas by it's ID...
skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);

// ...or by the canvas DOM element itself.
skycons.add(document.getElementById("icon2"), Skycons.RAIN);

// if you're using the Forecast API, you can also supply
// strings: "partly-cloudy-day" or "rain".

// start animation!
skycons.play();

// you can also halt animation with skycons.pause()

// want to change the icon? no problem:
skycons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
