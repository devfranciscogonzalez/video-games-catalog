import { useEffect, useState, useCallback } from "react";
import { fetchGameDetail } from "../services/gamesDetails";

export function useFetchGameDetail(gameId) {
  const [gameDetail, setGameDetail] = useState(null);
  const [trailers, setTrailers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getGameDetail = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { gameDetail, trailers } = await fetchGameDetail(gameId);
      setGameDetail(gameDetail);
      setTrailers(trailers);
    } catch (err) {
      setError(err.message || "Error al cargar detalles del juego");
    } finally {
      setLoading(false);
    }
  }, [gameId]);

  useEffect(() => {
    getGameDetail();
  }, [getGameDetail]);

  return { gameDetail, trailers, loading, error };
}
