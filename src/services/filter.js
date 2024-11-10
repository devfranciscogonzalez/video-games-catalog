import { httpClient } from "./api/httpClient";
import { ERRORS } from "../constants/errorMessages";

export const fetchFilterOptions = async () => {
  try {
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
  } catch (err) {
    throw new Error(ERRORS.FETCH_FILTER_OPTIONS || err.message);
  }
};
