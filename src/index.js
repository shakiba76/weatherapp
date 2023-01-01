function showTemperature(response) {
  let apiKey = "839f4fb8fd4ed856783401ab07d70036";
  let city = document.querySelector(`#search`);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}`;
  let temperature = Math.round(response.data.main.tempe);
  let temperatureElement = document.querySelector("#city-temperature");
  temperatureElement.innerHTML = `${temperature}`;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}
let now = new Date();
let days = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
let currentDay = document.querySelector(".name-day");
currentDay.innerHTML = `${day} ${hour}:${minutes}`;
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search");
  let cityName = document.querySelector(".city");
  cityName.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector(".searching-city");
form.addEventListener("submit", search);
axios.get(`&${apiUrl}&appid=${apiKey}`).then(showTemperature);
