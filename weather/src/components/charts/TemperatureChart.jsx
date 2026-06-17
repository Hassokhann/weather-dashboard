"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TemperatureChart({ forecast }) {
  if (!forecast) return null;

  // Take hourly data (every 3 hours)
  const data = forecast.list.slice(0, 8).map((item) => ({
    time: new Date(item.dt_txt).getHours() + ":00",
    temp: item.main.temp,
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">
        Hourly Temperature
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#3b82f6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}