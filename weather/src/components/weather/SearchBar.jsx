"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    if (!city.trim()) return;

    onSearch(city);
    setCity("");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex gap-3">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-3"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-5 py-3 rounded-lg"
      >
        Search
      </button>
    </div>
  );
}