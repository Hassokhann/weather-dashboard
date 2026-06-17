import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

// 🌐 Base URL (clean architecture)
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// ⚡ Shared axios instance (better scaling)
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// 🌦️ CURRENT WEATHER
export const getCurrentWeather = async (city) => {
  try {
    if (!API_KEY) throw new Error("Missing API Key");

    const res = await api.get("/weather", {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });

    return res.data;
  } catch (error) {
    console.log("CURRENT WEATHER ERROR:", error.response?.data || error.message);
    throw error;
  }
};

// 📅 FORECAST (5 DAY / 3 HOUR)
export const getForecast = async (city) => {
  try {
    if (!API_KEY) throw new Error("Missing API Key");

    const res = await api.get("/forecast", {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });

    return res.data;
  } catch (error) {
    console.log("FORECAST ERROR:", error.response?.data || error.message);
    throw error;
  }
};

// 📍 WEATHER BY COORDINATES
export const getWeatherByCoords = async (lat, lon) => {
  try {
    if (!API_KEY) throw new Error("Missing API Key");

    const res = await api.get("/weather", {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
      },
    });

    return res.data;
  } catch (error) {
    console.log("COORD WEATHER ERROR:", error.response?.data || error.message);
    throw error;
  }
};

// 🌫️ AIR QUALITY INDEX (AQI)
export const getAQI = async (lat, lon) => {
  try {
    if (!API_KEY) throw new Error("Missing API Key");

    const res = await axios.get(
      "https://api.openweathermap.org/data/2.5/air_pollution",
      {
        params: {
          lat,
          lon,
          appid: API_KEY,
        },
      }
    );

    return res.data;
  } catch (error) {
    console.log("AQI ERROR:", error.response?.data || error.message);
    throw error;
  }
};