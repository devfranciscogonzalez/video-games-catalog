import { useCallback, useEffect, useState } from "react";
import { adaptGames } from "../adapters/adaptGames";
import { fetchGames } from "../services/games";
import { searchGames } from "../services/searchGames";

export function useFetchGames(filters, searchText, currentPage) {
  const [games, setGames] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getGames = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = searchText
        ? await searchGames(searchText)
        : await fetchGames({ ...filters, page: currentPage });
      setGames(adaptGames(result.games));
      setTotalPages(result.totalPages);
    } catch (err) {
      setError(err.message || "Error al cargar juegos");
    } finally {
      setLoading(false);
    }
  }, [filters, searchText, currentPage]);

  useEffect(() => {
    getGames();
  }, [getGames]);

  return { games, totalPages, loading, error };
}
