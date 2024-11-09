export default function adaptGameDetails(gameDetailData) {
  if (!gameDetailData) {
    console.error(
      "Los datos de detalles de juegos no están disponibles:",
      gameDetailData
    );
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
