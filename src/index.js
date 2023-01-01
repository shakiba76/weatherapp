function search(city) {
  let apiKey = "839f4fb8fd4ed856783401ab07d70036";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showTemperature);
}
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#city-temperature");
  temperatureElement.innerHTML = `${temperature}`;
  let descriptionWeather = document.querySelector("#description");
  descriptionWeather.innerHTML = `${response.data.weather[0].description}`;
  let date = document.querySelector(".name-day");
  date.innerHTML = formatDate(response.data.dt * 1000);
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
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let day = days[date.getDay()];
  let hour = date.getHours();
  let minutes = date.getMinutes();
  return `${day} ${hour}:${minutes}`;
}
let days = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
search("Teran");
let form = document.querySelector(".searching-city");
form.addEventListener("submit", submittingCity);
