import { useCallback, useEffect, useState } from "react";
import { fetchGames2024 } from "../services/games";

export const useFetchGames = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadGames = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const gamesData = await fetchGames2024();
      setGames(gamesData);
    } catch (err) {
      setError(
        "No pudimos cargar los juegos en este momento. Por favor, verifica tu conexión a internet e intenta nuevamente."
      );
    } finally {
      setIsLoading(false);
    }
  }, []); 

  useEffect(() => {
    loadGames();
  }, [loadGames]);

  return {
    games,
    isLoading,
    error,
    refetch: loadGames,
  };
};
