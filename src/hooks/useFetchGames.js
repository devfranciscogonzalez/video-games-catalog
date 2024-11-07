import { useCallback, useEffect, useState } from "react";
import adaptGames from "../adapters/adaptGames";
import { GAMES_LOADING_ERROR_MESSAGE } from "../constants/constants";
import { fetchGames } from "../services/games";

export const useFetchGames = (filters) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getGames = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const gamesData = await fetchGames(filters);
      setGames(adaptGames(gamesData));
    } catch (error) {
      setError(GAMES_LOADING_ERROR_MESSAGE);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    getGames();
  }, [getGames]);

  return {
    games,
    loading,
    error,
    refetch: getGames,
  };
};
