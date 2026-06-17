export default function Forecast({ forecast }) {
  if (!forecast) return null;

  // OpenWeather gives data every 3 hours → we pick 1 per day
  const daily = forecast.list.filter((item, index) => index % 8 === 0);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">5-Day Forecast</h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {daily.slice(0, 5).map((day) => (
          <div
            key={day.dt}
            className="bg-slate-100 p-4 rounded-lg text-center"
          >
            <p className="font-semibold">
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>

            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              className="mx-auto"
            />

            <p className="text-xl font-bold">
              {Math.round(day.main.temp)}°C
            </p>

            <p className="text-sm capitalize">
              {day.weather[0].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}