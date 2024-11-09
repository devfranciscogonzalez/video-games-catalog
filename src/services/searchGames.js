import { FETCH_GAMES_ERROR_MESSAGE } from "../constants/constants";
import { httpClient } from "./httpClient";

export const searchGames = async (searchText) => {
  const baseParams = {
    ordering: "-metacritic",
    search_precise: true,
    search_exact: true,
    page_size: 20,
    search: searchText,
  };

  try {
    const { data } = await httpClient.get("/games", { params: baseParams });
    return {
      games: data.results,
      totalPages: Math.ceil(data.count / baseParams.page_size),
    };
  } catch (error) {
    throw new Error(FETCH_GAMES_ERROR_MESSAGE || error.message);
  }
};
