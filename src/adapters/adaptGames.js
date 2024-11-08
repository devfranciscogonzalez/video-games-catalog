export default function adaptGames(gamesData) {
  if (!Array.isArray(gamesData)) {
    console.error("Los datos de juegos no son un array:", gamesData);
    return [];
  }

  return gamesData.map(game => {
    const releaseDate = game.released ? new Date(game.released) : null;
    const formattedDate = releaseDate
      ? releaseDate.toLocaleDateString('es-CL', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
      : 'Fecha no disponible';
    return {
      id: game.id,
      name: game.name,
      releaseDate: formattedDate,
      metacritic: game.metacritic,
      backgroundImage: game.background_image,
      genres: game.genres,
    };
  });
}
