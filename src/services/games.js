import { FETCH_GAMES_ERROR_MESSAGE } from "../constants/constants";
import { httpClient } from "./httpClient";

export const fetchGames = async ({
  year,
  genre,
  platform,
  tag,
  developer,
  searchText,
}) => {
  const baseParams = {
    ordering: "-metacritic",
    page_size: 40,
    search_precise: true,
    search_exact: true,
  };

  const params = {
    ...baseParams,
    ...(year && { dates: `${year}-01-01,${year}-12-31` }),
    ...(genre && { genres: genre }),
    ...(platform && { platforms: platform }),
    ...(tag && { tags: tag }),
    ...(developer && { developers: developer }),
    ...(searchText && { search: searchText }),
  };

  try {
    const { data } = await httpClient.get("/games", { params });
    return data.results;
  } catch (error) {
    throw new Error(error.message || FETCH_GAMES_ERROR_MESSAGE);
  }
};
