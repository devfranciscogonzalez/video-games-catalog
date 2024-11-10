import { httpClient } from "./api/httpClient";
import {
  adaptGameDetailTrailers,
  adaptGameDetails,
} from "../adapters/adaptGameDetails";
import { ERRORS } from "../constants/errorMessages";

export async function fetchGameDetail(gameId) {
  try {
    const [detailsResponse, trailersResponse] = await Promise.all([
      httpClient.get(`/games/${gameId}`),
      httpClient.get(`/games/${gameId}/movies`),
    ]);
    return {
      gameDetail: adaptGameDetails(detailsResponse.data),
      trailers: adaptGameDetailTrailers(trailersResponse.data.results),
    };
  } catch (err) {
    throw new Error(ERRORS.FETCH_GAME_DETAIL || err.message);
  }
}
