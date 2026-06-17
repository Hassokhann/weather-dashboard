"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function WindChart({ forecast }) {
  if (!forecast) return null;

  const data = forecast.list.slice(0, 8).map((item) => ({
    time: new Date(item.dt_txt).getHours() + ":00",
    wind: item.wind.speed,
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">
        Wind Speed
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="wind" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}