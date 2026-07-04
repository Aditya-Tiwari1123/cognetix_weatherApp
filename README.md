# Weather App

A responsive and user-friendly **Weather App** built using **HTML, CSS, and JavaScript** that allows users to search for any city and view its **real-time weather information** using the **OpenWeatherMap API**.

The app displays key weather details such as **temperature, humidity, wind speed, weather condition, and weather icon**, with support for **temperature unit conversion between Celsius and Fahrenheit**.

---

## 🚀 Features

* **Search weather by city name**
* **Real-time weather data** using the OpenWeatherMap API
* Displays:

  * **City name and country**
  * **Weather description**
  * **Weather icon**
  * **Temperature**
  * **Humidity**
  * **Wind speed**
* **Temperature unit toggle**

  * Switch between **°C and °F**
* **Error handling**

  * Invalid city name
  * Empty input
  * Network/API issues
* **Loading indicator** while fetching data
* **Responsive design** for mobile, tablet, and desktop

---

## 🛠️ Tech Stack

* **HTML5** – Structure of the weather app
* **CSS3** – Styling, layout, animations, and responsive design
* **JavaScript (Vanilla JS)** – API integration, DOM manipulation, event handling, and temperature conversion
* **OpenWeatherMap API** – Source of real-time weather data

---

## 📂 Project Structure

```bash id="b2r8mp"
Weather-App/
│── index.html      # Main HTML structure
│── style.css       # Styling and responsive layout
│── script.js       # App logic, API calls, and weather rendering
│── README.md       # Project documentation
```

---

## 📸 Overview

This project includes:

* A **search bar** to enter a city name
* A **search button** to fetch weather details
* A **loading message** while data is being fetched
* An **error alert box** for invalid inputs or API/network errors
* A **weather card** displaying weather information
* A **unit toggle button** for Celsius/Fahrenheit conversion

---

## ⚙️ How It Works

### 1. User Searches for a City

The user enters a city name into the search field and clicks the **Search** button (or presses **Enter**).

### 2. API Request is Sent

The app sends a request to the **OpenWeatherMap Current Weather API** using the entered city name.

### 3. Weather Data is Fetched

If the request is successful, the app receives weather data including:

* Temperature
* Humidity
* Wind speed
* Weather condition
* Weather icon
* Country code

### 4. Data is Displayed

The weather card is updated dynamically with the latest data.

### 5. Temperature Unit Conversion

The app initially fetches temperature in **Celsius** and stores it internally.
When the user clicks the unit toggle button, the temperature is converted in the browser between:

* **Celsius (°C)**
* **Fahrenheit (°F)**

without making another API request.

---

## 🌐 API Used

This project uses the **OpenWeatherMap API** to fetch live weather data.

### API Endpoint Format

```bash id="yq4d1v"
https://api.openweathermap.org/data/2.5/weather?q=CITY_NAME&appid=YOUR_API_KEY&units=metric
```

### Example

```bash id="8w9ncf"
https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=YOUR_API_KEY&units=metric
```

---

## 🔑 API Key Setup

To run this project, you need an **OpenWeatherMap API key**.

### Steps:

1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Create a free account
3. Generate your API key
4. Open `script.js`
5. Replace the API key value with your own:

```js id="m8g7zs"
const API_KEY = "YOUR_API_KEY";
```

---

## 🧠 Main Functionalities in JavaScript

### Temperature Conversion

The app includes helper functions to convert temperature units:

* **Celsius to Fahrenheit**
* **Fahrenheit to Celsius**

### Weather Rendering

After receiving API data, JavaScript updates:

* city name
* country code
* description
* icon
* temperature
* humidity
* wind speed

### Error Handling

The app shows proper messages when:

* the city field is empty
* the city is not found
* the API request fails
* there is a network problem

### Enter Key Support

Users can press **Enter** inside the input box to search instantly.

---

## 📱 Responsive Design

The Weather App is designed to work well on all screen sizes.

### Mobile

* Compact layout
* Search bar and weather card fit small screens

### Tablet

* Slightly wider weather card and header scaling

### Desktop

* More spacious weather card
* Larger temperature display and improved spacing

---

## ▶️ How to Run the Project

### Option 1: Run Directly

1. Download or clone the project
2. Open `index.html` in your browser

### Option 2: Use VS Code Live Server

1. Open the project folder in **VS Code**
2. Install the **Live Server** extension
3. Right-click on `index.html`
4. Select **Open with Live Server**

---

## ⚠️ Important Note

This project uses a **client-side API key** in JavaScript.
For learning and portfolio projects, this is acceptable, but for production apps, API keys should be secured through a backend or environment variables.

---

## 📌 Future Improvements

You can extend this project by adding:

* **5-day / weekly forecast**
* **Current location weather** using geolocation
* **Sunrise and sunset timing**
* **Feels like temperature**
* **Pressure and visibility**
* **Recent search history**
* **Background/theme changes based on weather**
* **Dark mode**
* **Hourly forecast charts**

---

## 🎯 Learning Outcomes

This project is great for practicing:

* Fetch API
* Async/Await
* API integration
* DOM manipulation
* Event handling
* Form validation
* Conditional rendering
* Error handling in JavaScript
* Responsive UI design

---

## 👨‍💻 Author

**Aditya Tiwari**

This project is a good beginner-to-intermediate frontend project for understanding how APIs work in real web applications.

---
