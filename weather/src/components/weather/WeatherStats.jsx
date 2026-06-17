export default function WeatherStats({ weather }) {
  if (!weather) return null;

  return (
    <div className="grid md:grid-cols-4 gap-4">
      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500">Feels Like</p>
        <h2 className="text-2xl font-bold">
          {Math.round(weather.main.feels_like)}°C
        </h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500">Humidity</p>
        <h2 className="text-2xl font-bold">
          {weather.main.humidity}%
        </h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500">Wind</p>
        <h2 className="text-2xl font-bold">
          {weather.wind.speed} m/s
        </h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500">Pressure</p>
        <h2 className="text-2xl font-bold">
          {weather.main.pressure}
        </h2>
      </div>
    </div>
  );
}