import { useCallback, useEffect, useState } from "react";
import { fetchFilterOptions } from "../services/filter";

export function useFetchFilterOption() {
  const [options, setOptions] = useState({
    genres: [],
    platforms: [],
    tags: [],
    developers: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getFilterOptions = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchFilterOptions();
      setOptions(data);
    } catch (err) {
      setError(err.message || "Error al cargar opciones de filtros");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getFilterOptions();
  }, [getFilterOptions]);

  return { options, loading, error };
}
