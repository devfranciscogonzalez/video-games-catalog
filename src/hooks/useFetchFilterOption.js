import { useEffect, useState } from "react";
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

  useEffect(() => {
    const loadFilterOptions = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchFilterOptions();
        setOptions(data);
      } catch (err) {
        setError("Error al cargar opciones de filtros");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadFilterOptions();
  }, []);

  return { options, loading, error };
}
