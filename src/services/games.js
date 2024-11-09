import { FETCH_GAMES_ERROR_MESSAGE } from "../constants/constants";
import { httpClient } from "./httpClient";

export const fetchGames = async ({
  year,
  genre,
  platform,
  tag,
  developer,
  searchText,
  page = 1,
}) => {
  const baseParams = {
    ordering: "-metacritic",
    search_precise: true,
    search_exact: true,
    page_size: 20,
    page: page,
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
    console.log(data.count);
    return {
      games: data.results,
      totalPages: Math.ceil(data.count / baseParams.page_size),
    };
  } catch (error) {
    throw new Error(FETCH_GAMES_ERROR_MESSAGE || error.message);
  }
};
