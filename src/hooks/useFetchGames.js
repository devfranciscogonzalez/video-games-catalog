import { useCallback, useEffect, useState } from "react";
import { GAMES_LOADING_ERROR_MESSAGE } from "../constants/constants";
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
      setError(GAMES_LOADING_ERROR_MESSAGE);
      console.log(err);
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
