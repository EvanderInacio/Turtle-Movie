import { createContext, useContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : []);

  const addFavorite = (movie) => {
    const newFavorites = [...favorites, movie];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const removeFavorite = (movie) => {
    const newFavorites = favorites.filter((favorite) => favorite.id !== movie.id);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const isFavorite = (movie) => {
    return favorites.some((favorite) => favorite.id === movie.id);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>{children}</FavoriteContext.Provider>;
};

export const useFavorites = () => useContext(FavoriteContext);
