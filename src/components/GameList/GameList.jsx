import { useState, useEffect } from "react";
import { fetchGames2024 } from "../../services/games";
import { GameCard } from "../GameCard/GameCard";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import "./GameList.css";

export const GameList = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadGames = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const gamesData = await fetchGames2024();
      setGames(gamesData);
    } catch (err) {
      setError(
        "No pudimos cargar los juegos en este momento. Por favor, verifica tu conexión a internet e intenta nuevamente."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadGames();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={loadGames} />;
  }

  return (
    <div className="games-container">
      <h1 className="games-title">Mejores Videojuegos del 2024</h1>
      <div className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};
