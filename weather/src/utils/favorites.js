const KEY = "weather_favorites";

// Get all favorites
export const getFavorites = () => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

// Add favorite city
export const addFavorite = (city) => {
  const favorites = getFavorites();

  if (!favorites.includes(city)) {
    const updated = [...favorites, city];
    localStorage.setItem(KEY, JSON.stringify(updated));
  }
};

// Remove favorite city
export const removeFavorite = (city) => {
  const favorites = getFavorites();
  const updated = favorites.filter((c) => c !== city);
  localStorage.setItem(KEY, JSON.stringify(updated));
};