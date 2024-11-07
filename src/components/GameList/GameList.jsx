import { useState } from "react";
import {
  INITIAL_DEVELOPER,
  INITIAL_GENRE,
  INITIAL_PLATFORM,
  INITIAL_TAG,
  INITIAL_YEAR,
} from "../../constants/filterDefaults";
import { useFetchGames } from "../../hooks/useFetchGames";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import FilterPanel from "../FilterPanel/FilterPanel";
import GameCard from "../GameCard/GameCard";
import Loader from "../Loader/Loader";
import "./GameList.css";

export default function GameList() {
  
  const [filters, setFilters] = useState({
    year: INITIAL_YEAR,
    genre: INITIAL_GENRE,
    platform: INITIAL_PLATFORM,
    tag: INITIAL_TAG,
    developer: INITIAL_DEVELOPER,
  });

  const { games, loading, error, refetch } = useFetchGames(filters);

    const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  return (
    <div className="games-container">
      <FilterPanel onFilter={handleFilter} />
      <div className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
