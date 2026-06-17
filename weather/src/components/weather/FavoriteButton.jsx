"use client";

import { addFavorite } from "@/utils/favorites";

export default function FavoriteButton({ city }) {
  const handleAdd = () => {
    addFavorite(city);
    alert(`${city} added to favorites ⭐`);
  };

  return (
    <button
      onClick={handleAdd}
      className="bg-yellow-500 text-white px-3 py-1 rounded"
    >
      ⭐ Favorite
    </button>
  );
}