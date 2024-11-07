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
import SearchPanel from "../SearchPanel/SearchPanel";

export default function GameList() {
  const [filters, setFilters] = useState({
    year: INITIAL_YEAR,
    genre: INITIAL_GENRE,
    platform: INITIAL_PLATFORM,
    tag: INITIAL_TAG,
    developer: INITIAL_DEVELOPER,
  });
  const [searchText, setSearchText] = useState("");

  const { games, loading, error, refetch } = useFetchGames(filters, searchText);

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearch = (newSearchText) => {
    setSearchText(newSearchText);
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
      <SearchPanel onSearch={handleSearch} />
      <div className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
