// Error message displayed - useFetchGames.jsx
export const GAMES_LOADING_ERROR_MESSAGE =
  "No pudimos cargar los juegos en este momento. Por favor, verifica tu conexión a internet e intenta nuevamente.";

// API configuration - games.js
export const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const DATE_RANGE = "2022-01-01,2023-12-31";
export const ORDERING = "-metacritic";
export const FETCH_GAMES_ERROR_MESSAGE =
  "Ocurrió un error al obtener los datos de los juegos";
