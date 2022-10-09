const location = document.querySelector("#locationWeather h3");
const weather = document.querySelector("#locationWeather h4");
const API_KEY = "461bf9f20614fd0355e67234da08480f";

function getGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      location.innerText = data.name;
      weather.innerText = data.weather[0].description;
    });
}
function errorGeo() {
  alert("I can not find your location!");
}

navigator.geolocation.getCurrentPosition(getGeo, errorGeo);
