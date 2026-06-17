"use client";

import Link from "next/link";
import { FaHome, FaCloudSun, FaHeart, FaCog } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-10">
        WeatherPro
      </h2>

      <nav className="space-y-5">
        <Link
          href="/"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          href="/forecast"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaCloudSun />
          Forecast
        </Link>

        <Link
          href="/favorites"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaHeart />
          Favorites
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaCog />
          Settings
        </Link>
      </nav>
    </aside>
  );
}