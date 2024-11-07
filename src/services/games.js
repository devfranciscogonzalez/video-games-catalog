import { FETCH_GAMES_ERROR_MESSAGE } from "../constants/constants";
import { httpClient } from "./httpClient";

export const fetchGames = async ({ year, genre, platform, tag, developer }) => {
  const baseParams = {
    dates: `${year}-01-01,${year}-12-31`,
    ordering: "-metacritic",
    page_size: 40,
  };

  const params = {
    ...baseParams,
    ...(genre && { genres: genre }),
    ...(platform && { platforms: platform }),
    ...(tag && { tags: tag }),
    ...(developer && { developers: developer }),
  };
  // console.log(params);
  try {
    const { data } = await httpClient.get("/games", { params });
    return data.results;
  } catch (error) {
    throw new Error(error.message || FETCH_GAMES_ERROR_MESSAGE);
  }
};
