"use client";

import { useEffect, useState } from "react";
import { getFavorites } from "@/utils/favorites";

export default function FavoritesList({ onSelect }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">⭐ Favorites</h2>

      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites yet</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {favorites.map((city) => (
            <button
              key={city}
              onClick={() => onSelect(city)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}