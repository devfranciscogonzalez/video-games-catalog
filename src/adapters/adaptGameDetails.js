export function adaptGameDetails(gameDetailData) {
  if (!gameDetailData) {
    return null;
  }

  const releaseDate = gameDetailData.released
    ? new Date(gameDetailData.released)
    : null;
  const formattedDate = releaseDate
    ? releaseDate.toLocaleDateString("es-CL", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "Fecha no disponible";

  return {
    id: gameDetailData.id,
    name: gameDetailData.name,
    releaseDate: formattedDate,
    metacritic: gameDetailData.metacritic,
    backgroundImage: gameDetailData.background_image,
    backgroundImageAdditional: gameDetailData.background_image_additional,
    genres: gameDetailData.genres,
    platforms: gameDetailData.platforms,
    description: gameDetailData.description_raw,
  };
}

export function adaptGameDetailTrailers(trailersData) {
  if (!trailersData) {
    return [];
  }

  return trailersData.map((trailer) => {
    return {
      id: trailer.id,
      name: trailer.name,
      trailerVideoUrl: trailer.data.max,
    };
  });
}
