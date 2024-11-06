import { useFetchGames } from "../../hooks/useFetchGames";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import GameCard from "../GameCard/GameCard";
import Loader from "../Loader/Loader";
import "./GameList.css";

export default function GameList() {
  const { games, isLoading, error, refetch } = useFetchGames();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }
  console.log({ games });
  return (
    <div className="games-container">
      <div className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
