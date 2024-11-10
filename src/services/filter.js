import { httpClient } from "./api/httpClient";

export const fetchFilterOptions = async () => {
  const endpoints = ["/genres", "/platforms", "/tags", "/developers"];
  const [genres, platforms, tags, developers] = await Promise.all(
    endpoints.map((endpoint) => httpClient.get(endpoint))
  );

  return {
    genres: genres.data.results,
    platforms: platforms.data.results,
    tags: tags.data.results,
    developers: developers.data.results,
  };
};
