function search(city) {
  let apiKey = "839f4fb8fd4ed856783401ab07d70036";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showTemperature);
}
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#city-temperature");
  temperatureElement.innerHTML = `${temperature}`;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}
function submittingCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#city-input").value;
  search(searchInputElement);
  let cityName = document.querySelector(".city");
  cityName.innerHTML = searchInputElement;
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
search("Tehran");
let form = document.querySelector(".searching-city");
form.addEventListener("submit", submittingCity);
