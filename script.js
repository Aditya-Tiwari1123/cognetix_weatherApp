/* =========================================
   CONFIG
   ========================================= */
// ⚠️ PASTE YOUR OPENWEATHERMAP API KEY BELOW
// Get one free at: https://openweathermap.org/api
const API_KEY = "989b1e93df1e4aade4da850fa2830644";

/* =========================================
   DOM REFERENCES
   ========================================= */
const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const loadingMsg = document.querySelector("#loadingMsg");
const errorAlert = document.querySelector("#errorAlert");
const errorText = document.querySelector("#errorText");
const weatherCard = document.querySelector("#weatherCard");

const cityNameEl = document.querySelector("#cityName");
const weatherDescriptionEl = document.querySelector("#weatherDescription");
const weatherIconEl = document.querySelector("#weatherIcon");
const temperatureEl = document.querySelector("#temperature");
const humidityEl = document.querySelector("#humidity");
const windSpeedEl = document.querySelector("#windSpeed");
const unitToggleBtn = document.querySelector("#unitToggleBtn");

/* =========================================
   STATE
   ========================================= */
// We always fetch in Celsius (metric) from the API,
// then convert in-browser when the user toggles units.
let lastTempCelsius = null;
let currentUnit = "C"; // "C" or "F"

/* =========================================
   STEP 6 — UNIT CONVERSION
   ========================================= */
function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}

function renderTemperature() {
  if (lastTempCelsius === null) return;

  const value =
    currentUnit === "C"
      ? lastTempCelsius
      : celsiusToFahrenheit(lastTempCelsius);

  temperatureEl.textContent = `${Math.round(value)}°${currentUnit}`;
}

unitToggleBtn.addEventListener("click", () => {
  currentUnit = currentUnit === "C" ? "F" : "C";
  renderTemperature();
});

/* =========================================
   STEP 7 — ERROR HANDLING
   ========================================= */
function showError(message) {
  errorText.textContent = message;
  errorAlert.classList.remove("hidden");
  weatherCard.classList.add("hidden");
}

function hideError() {
  errorAlert.classList.add("hidden");
}

/* =========================================
   STEP 5 — DISPLAY WEATHER INFO
   ========================================= */
function displayWeather(data) {
  cityNameEl.textContent = `${data.name}, ${data.sys.country}`;
  weatherDescriptionEl.textContent = data.weather[0].description;
  weatherIconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weatherIconEl.alt = data.weather[0].description;

  lastTempCelsius = data.main.temp;
  currentUnit = "C";
  unitToggleBtn.dataset.unit = "C";
  renderTemperature();

  humidityEl.textContent = `${data.main.humidity}%`;
  windSpeedEl.textContent = `${data.wind.speed} m/s`;

  weatherCard.classList.remove("hidden");
}

/* =========================================
   STEP 3 & 4 — FETCH + PARSE
   ========================================= */
async function fetchWeather(city) {
  hideError();
  loadingMsg.classList.remove("hidden");
  weatherCard.classList.add("hidden");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);

    // City not found (OpenWeather returns 404 for invalid city)
    if (response.status === 404) {
      showError("City not found. Please check the spelling and try again.");
      return;
    }

    if (!response.ok) {
      showError(`Something went wrong (error ${response.status}). Please try again.`);
      return;
    }

    const data = await response.json();
    displayWeather(data);

  } catch (err) {
    // Network issue (e.g. internet is off)
    showError("Network error — please check your internet connection.");
  } finally {
    loadingMsg.classList.add("hidden");
  }
}

/* =========================================
   EVENT LISTENERS
   ========================================= */
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();

  if (!city) {
    showError("Please enter a city name.");
    return;
  }

  fetchWeather(city);
});

// Allow pressing "Enter" inside the input field
cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});
