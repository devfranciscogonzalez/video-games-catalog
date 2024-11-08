import GameList from "../../components/GameList/GameList";
import NavBar from "../../components/NavBar/NavBar";
import { useState } from "react";
import {
  INITIAL_DEVELOPER,
  INITIAL_GENRE,
  INITIAL_PLATFORM,
  INITIAL_TAG,
  INITIAL_YEAR,
} from "../../constants/filterDefaults";
import { useFetchGames } from "../../hooks/useFetchGames";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";

export default function Home() {
  const [filters, setFilters] = useState({
    year: INITIAL_YEAR,
    genre: INITIAL_GENRE,
    platform: INITIAL_PLATFORM,
    tag: INITIAL_TAG,
    developer: INITIAL_DEVELOPER,
  });
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { games, totalPages, loading, error, refetch } = useFetchGames(
    filters,
    searchText,
    currentPage
  );

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearch = (newSearchText) => {
    setSearchText(newSearchText);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }
  return (
    <>
      <NavBar handleSearch={handleSearch} />
      <div className="games-container">
        <FilterPanel onFilter={handleFilter} />
        <GameList games={games} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
