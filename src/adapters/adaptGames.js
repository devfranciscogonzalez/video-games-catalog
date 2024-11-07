export default function adaptGames(gamesData) {
  if (!Array.isArray(gamesData)) {
    console.error("Los datos de juegos no son un array:", gamesData);
    return [];
  }

  return gamesData.map(game => ({
    id: game.id,
    name: game.name,
    releaseDate: game.released,
    metacritic: game.metacritic,
    backgroundImage: game.background_image,
    genres: game.genres,
  }));
}
