import { httpClient } from "./httpClient";

export async function getGameDetails(gameId) {
  try {
    const response = await httpClient.get(`/games/${gameId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching game details:", error);
    throw error;
  }
}
