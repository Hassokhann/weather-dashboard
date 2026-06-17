import FavoriteButton from "./FavoriteButton";

export default function CurrentWeather({ weather }) {
  if (!weather) return null;

  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{weather.name}</h2>

        <FavoriteButton city={weather.name} />
      </div>

      <p className="text-5xl">
        {Math.round(weather.main.temp)}°C
      </p>

      <p className="capitalize">
        {weather.weather[0].description}
      </p>
    </div>
  );
}