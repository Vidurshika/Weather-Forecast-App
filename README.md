# Weather Forecast App 🌤️

A simple React-based weather forecasting app that allows users to search for any city and view real-time weather data using the [OpenWeatherMap API](https://openweathermap.org/).

---

## 🌐 Live Features

- 🔍 Search for any city
- 📍 Get current weather details such as:
  - Temperature
  - Humidity
  - Wind speed
  - Weather description
- 🌈 Responsive and user-friendly interface

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Styling:** CSS
- **API:** [OpenWeatherMap](https://openweathermap.org/)

---

## 📁 Project Structure

```
my-app/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── Header.js
│   ├── Footer.js
│   ├── CityName.js
│   ├── CityWeather.js
│   ├── Content.js
│   ├── Code Flow.md
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── App.test.js
│   └── env.txt (example format only)
├── .gitignore
├── README.md
├── gitattributes
├── package.json
├── package-lock.json
```

---

## 🔐 API Key Handling

This app uses the OpenWeatherMap API. To keep your key secure:

### ➕ Create a `.env` file in the root of your project:

```
REACT_APP_WEATHER_API_KEY=your_actual_api_key_here
```

> Make sure your variable name starts with `REACT_APP_` as required by Create React App.

### 🔒 Add `.env` to `.gitignore`:

Ensure this line exists in `.gitignore` so your key isn’t tracked:

```
.env
```

### 🧠 Use it in your code like this:

```js
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Vidurshika/weather-forecast-app.git
cd weather-forecast-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up API Key

Create a `.env` file and add your OpenWeatherMap API key as shown above.

### 4. Start the Development Server

```bash
npm start
```

---

## 📸 Interface Preview

- Input field to search for a city.
- Displays fetched weather information.
- Clean layout with header and footer components.

---


