import { adaptGames } from "../adapters/adaptGames";
import {
  API_KEY,
  BASE_URL,
  DATE_RANGE,
  FETCH_GAMES_ERROR_MESSAGE,
  ORDERING,
} from "../constants/constants";

export const fetchGames = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}?key=${API_KEY}&dates=${DATE_RANGE}&ordering=${ORDERING}&page_size=40`
    );
    const json = await response.json();

    return json.results.map((game) => adaptGames(game));
  } catch (error) {
    throw new Error(error.message || FETCH_GAMES_ERROR_MESSAGE);
  }
};
