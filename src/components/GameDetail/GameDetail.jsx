import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { httpClient } from "../../services/httpClient";
import "./GameDetail.css";

export default function GameDetail() {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    async function fetchGameDetails() {
      const response = await httpClient.get(`/games/${gameId}`);
      const data = await response.data;
      setGame(data);
    }
    fetchGameDetails();
  }, [gameId]);

  if (!game) {
    return <p>Loading...</p>;
  }
  console.log(game);

  return (
    <div className="game-detail">
      <img
        src={game.background_image}
        alt={game.name}
        className="game-detail-image"
      />
      <h1>{game.name}</h1>
      <p>Genre: {game.genres.map((genre) => genre.name).join(", ")}</p>
      <p>Release Date: {new Date(game.releaseDate).toLocaleDateString()}</p>
      <p>Platform: {game.platforms.join(", ")}</p>
      <p>Metacritic Score: {game.metacritic}</p>
      {game.trailers && (
        <div className="trailers">
          <h3>Trailers</h3>
          {game.trailers.map((trailer, index) => (
            <video key={index} src={trailer} controls />
          ))}
        </div>
      )}
    </div>
  );
}
