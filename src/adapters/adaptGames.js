export const adaptGames = (game) => ({
  id: game.id,
  name: game.name,
  releaseDate: game.released,
  metacritic: game.metacritic,
  backgroundImage: game.background_image,
  genres: game.genres,
});
