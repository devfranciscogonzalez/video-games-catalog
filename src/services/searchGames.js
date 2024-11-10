import { ERRORS } from "../constants/errorMessages";
import { httpClient } from "./api/httpClient";

export const searchGames = async (searchText) => {
  const baseParams = {
    ordering: "-metacritic",
    search_precise: true,
    page_size: 20,
    search: searchText,
  };

  try {
    const { data } = await httpClient.get("/games", { params: baseParams });
    return {
      games: data.results,
      totalPages: Math.ceil(data.count / baseParams.page_size),
    };
  } catch (err) {
    throw new Error(ERRORS.SEARCH_GAMES || err.message);
  }
};
