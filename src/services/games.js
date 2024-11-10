import { ERRORS } from "../constants/errorMessages";
import { httpClient } from "./api/httpClient";

export async function fetchGames({
  year,
  genre,
  platform,
  tag,
  developer,
  page = 1,
}) {
  const baseParams = {
    ordering: "-metacritic",
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
  };

  try {
    const { data } = await httpClient.get("/games", { params });
    return {
      games: data.results,
      totalPages: Math.ceil(data.count / baseParams.page_size),
    };
  } catch (err) {
    throw new Error(ERRORS.FETCH_GAMES || err.message);
  }
}
