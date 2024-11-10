import { useEffect, useState, useCallback } from "react";
import { httpClient } from "../services/httpClient";
import adaptGameDetails from "../adapters/adaptGameDetails";

export const useFetchGameDetail = (gameId) => {
  const [gameDetail, setGameDetail] = useState(null);
  const [trailers, setTrailers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGameData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [detailsResponse, trailersResponse] = await Promise.all([
        httpClient.get(`/games/${gameId}`),
        httpClient.get(`/games/${gameId}/movies`),
      ]);
      setGameDetail(adaptGameDetails(detailsResponse.data));
      setTrailers(trailersResponse.data.results);
    } catch (error) {
      setError(error.message || "Ocurrió un error al cargar el juego");
    } finally {
      setLoading(false);
    }
  }, [gameId]);

  useEffect(() => {
    if (gameId) {
      fetchGameData();
    }
  }, [fetchGameData, gameId]);

  return { gameDetail, trailers, loading, error };
};
