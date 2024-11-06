import {
  API_KEY,
  BASE_URL,
  DATE_RANGE,
  FETCH_GAMES_ERROR_MESSAGE,
  ORDERING,
} from "../constants/constants";

export const fetchGames2024 = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}?dates=${DATE_RANGE}&ordering=${ORDERING}&key=${API_KEY}`
    );
    const json = await response.json();
    return json.results;
  } catch (error) {
    throw new Error(error.message || FETCH_GAMES_ERROR_MESSAGE);
  }
};
