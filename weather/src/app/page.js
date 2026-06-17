"use client";

import { useState, useEffect } from "react";

import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import SearchBar from "@/components/weather/SearchBar";
import CurrentWeather from "@/components/weather/CurrentWeather";
import WeatherStats from "@/components/weather/WeatherStats";
import Forecast from "@/components/weather/Forecast";
import TemperatureChart from "@/components/charts/TemperatureChart";
import WindChart from "@/components/charts/WindChart";
import FavoritesList from "@/components/weather/FavoritesList";
import AQICard from "@/components/weather/AQICard";

import useGeolocation from "@/hooks/useGeolocation";

import {
  getCurrentWeather,
  getForecast,
  getAQI,
  getWeatherByCoords,
} from "@/services/weatherApi";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [aqi, setAqi] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location, getLocation } = useGeolocation();

  // 🌍 MAIN SEARCH FUNCTION
  const fetchWeatherData = async (city) => {
    if (!city) return;

    try {
      setLoading(true);
      setError(null);

      const weatherData = await getCurrentWeather(city);
      const forecastData = await getForecast(city);

      setWeather(weatherData);
      setForecast(forecastData);

      // 🌫️ AQI fetch
      const aqiData = await getAQI(
        weatherData.coord.lat,
        weatherData.coord.lon
      );

      setAqi(aqiData);
    } catch (err) {
      console.log(err);
      setError("City not found or API error");
      setWeather(null);
      setForecast(null);
      setAqi(null);
    } finally {
      setLoading(false);
    }
  };

  // 📍 GPS FUNCTION
  const fetchByCoords = async () => {
    if (!location) return;

    try {
      setLoading(true);
      setError(null);

      const weatherData = await getWeatherByCoords(
        location.lat,
        location.lon
      );

      const forecastData = await getForecast(weatherData.name);

      setWeather(weatherData);
      setForecast(forecastData);

      const aqiData = await getAQI(location.lat, location.lon);
      setAqi(aqiData);
    } catch (err) {
      console.log(err);
      setError("Location weather failed");
    } finally {
      setLoading(false);
    }
  };

  // auto trigger GPS
  useEffect(() => {
    if (location) {
      fetchByCoords();
    }
  }, [location]);

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-slate-100 min-h-screen">
        <Navbar />

        <div className="p-6 space-y-6">

          {/* SEARCH */}
          <SearchBar onSearch={fetchWeatherData} />

          {/* FAVORITES */}
          <FavoritesList onSelect={fetchWeatherData} />

          {/* GPS BUTTON */}
          <button
            onClick={getLocation}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            📍 Use My Location
          </button>

          {/* LOADING */}
          {loading && (
            <div className="text-center text-gray-600">
              Loading weather data...
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div className="text-center text-red-500 font-medium">
              {error}
            </div>
          )}

          {/* WEATHER */}
          {weather && (
            <>
              <CurrentWeather weather={weather} />
              <WeatherStats weather={weather} />
            </>
          )}

          {/* AQI */}
          {aqi && <AQICard aqi={aqi} />}

          {/* FORECAST */}
          {forecast && (
            <>
              <Forecast forecast={forecast} />
              <TemperatureChart forecast={forecast} />
              <WindChart forecast={forecast} />
            </>
          )}

        </div>
      </main>
    </div>
  );
}