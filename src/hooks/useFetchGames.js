import { useCallback, useEffect, useState } from "react";
import adaptGames from "../adapters/adaptGames";
import { GAMES_LOADING_ERROR_MESSAGE } from "../constants/constants";
import { fetchGames } from "../services/games";

export const useFetchGames = (filters, searchText = "", page) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const getGames = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { games: gamesData, totalPages } = await fetchGames({
        ...filters,
        searchText,
        page,
      });
      setGames(adaptGames(gamesData));
      setTotalPages(totalPages);
    } catch (error) {
      setError(error.message || GAMES_LOADING_ERROR_MESSAGE);
    } finally {
      setLoading(false);
    }
  }, [filters, searchText, page]);

  useEffect(() => {
    getGames();
  }, [getGames]);

  return {
    games,
    totalPages,
    loading,
    error,
  };
};
