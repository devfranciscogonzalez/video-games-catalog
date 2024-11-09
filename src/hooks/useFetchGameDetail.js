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
      console.log(detailsResponse);
      console.log(trailersResponse);
      setGameDetail(adaptGameDetails(detailsResponse.data));
      setTrailers(trailersResponse.data.results);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Error fetching game data");
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
