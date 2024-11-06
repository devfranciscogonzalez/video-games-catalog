const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchGames2024 = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}?dates=2024-01-01,2024-12-31&ordering=-metacritic&key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const json = await response.json();
    return json.results;
  } catch (error) {
    throw new Error(
      error.message || "Ocurrió un error al obtener los datos de los juegos"
    );
  }
};
