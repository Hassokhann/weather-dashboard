export default function AQICard({ aqi }) {
  if (!aqi) return null;

  const level = aqi.list[0].main.aqi;

  const status = {
    1: "Good 😊",
    2: "Fair 🙂",
    3: "Moderate 😐",
    4: "Poor 😷",
    5: "Very Poor ☠️",
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="font-bold mb-2">Air Quality Index</h2>

      <p className="text-2xl font-bold">
        {status[level]}
      </p>
    </div>
  );
}