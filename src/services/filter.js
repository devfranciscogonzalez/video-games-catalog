import { FETCH_GAMES_ERROR_MESSAGE } from "../constants/constants";
import { httpClient } from "./httpClient";

export const fetchFilterOptions = async () => {
  try {
    const [genres, platforms, tags, developers] = await Promise.all([
      httpClient.get("/genres"),
      httpClient.get("/platforms"),
      httpClient.get("/tags"),
      httpClient.get("/developers"),
    ]);

    return {
      genres: genres.data.results,
      platforms: platforms.data.results,
      tags: tags.data.results,
      developers: developers.data.results,
    };
  } catch (error) {
    throw new Error(error.message || FETCH_GAMES_ERROR_MESSAGE);
  }
};
