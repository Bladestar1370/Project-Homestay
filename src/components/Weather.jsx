// src/pages/Weather.jsx
import { useState, useEffect } from 'react';
import './Weather.css';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=16.37&longitude=73.38&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Asia%2FKolkata'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div className="weatherLoading">Loading weather for Devgad...</div>;
  if (error) return <div className="weatherError">Error: {error}</div>;

  const current = weather.current;
  const daily = weather.daily;

  // Simple weather code to emoji/icon mapping (WMO codes: https://open-meteo.com/en/docs)
  const getWeatherIcon = (code) => {
    if (code <= 3) return '☀️';      // Clear / Mainly clear
    if (code <= 48) return '☁️';     // Cloudy
    if (code <= 67) return '🌧️';     // Rain
    if (code <= 86) return '🌨️';     // Snow / Sleet
    if (code >= 95) return '⛈️';     // Thunderstorm
    return '🌤️';
  };

  return (
    <div className="weatherContainer">
      <h2>Current Weather in Devgad, Maharashtra</h2>

      <div className="currentWeather">
        <div className="temp">
          {getWeatherIcon(current.weather_code)}
          <span>{Math.round(current.temperature_2m)}°C</span>
        </div>
        <div className="details">
          <p>Feels like: {Math.round(current.apparent_temperature)}°C</p>
          <p>Humidity: {current.relative_humidity_2m}%</p>
          <p>Wind: {Math.round(current.wind_speed_10m)} km/h</p>
          <p>Rain today: {current.precipitation} mm</p>
        </div>
      </div>

      <h3>Today Overview</h3>
      <div className="daily">
        <div className="day">
          <p>Max: {Math.round(daily.temperature_2m_max[0])}°C</p>
          <p>Min: {Math.round(daily.temperature_2m_min[0])}°C</p>
          <p>{getWeatherIcon(daily.weather_code[0])}</p>
        </div>
        <p className="sun">Sunrise: {new Date(daily.sunrise[0]).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</p>
        <p className="sun">Sunset: {new Date(daily.sunset[0]).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</p>
      </div>

      <p className="note">Powered by Open-Meteo • Data updated in real-time</p>
    </div>
  );
}

export default Weather;