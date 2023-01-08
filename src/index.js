function search(city) {
  let apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showTemperature);
}

function getForecast(coordinates) {
  let apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(displayForecast);
}
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  return days[days];
}
function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  let forecast = response.data.daily;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      let forecastHtml = `<div class="row">`;
      forecastHtml =
        forecastHtml +
        `
      <div class="col-2">
        <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
        <img src="http://openweathermap.org/img/wn/${
          forecastDay.weather[0].icon
        }@2x.png" alt="" width="42"/>
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> ${Math.round(
            forecastDay.temp.max
          )}° </span>
          <span class="weather-forecast-temperature-min"> ${Math.round(
            forecastDay.temp.min
          )}° </span>
        </div>
      </div>
      `;
    }
  });
  forecastHtml = forecastHtml + `</div>`;
  forecastElement.innerHTML = forecastHtml;
}
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#city-temperature");
  temperatureElement.innerHTML = `${temperature}°c`;
  let descriptionWeather = document.querySelector("#description");
  descriptionWeather.innerHTML = `${response.data.weather[0].description}`;
  let date = document.querySelector(".name-day");
  date.innerHTML = formatDate(response.data.dt * 1000);
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  getForecast(response.data.coord);
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
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
search("Teran");
let form = document.querySelector(".searching-city");
form.addEventListener("submit", submittingCity);
