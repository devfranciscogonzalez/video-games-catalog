import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import GameList from "../../components/GameList/GameList";
import Loader from "../../components/Loader/Loader";
import NavBar from "../../components/NavBar/NavBar";
import Pagination from "../../components/Pagination/Pagination";
import {
  INITIAL_DEVELOPER,
  INITIAL_GENRE,
  INITIAL_PLATFORM,
  INITIAL_TAG,
  INITIAL_YEAR,
} from "../../constants/filterDefaults";
import { useFetchGames } from "../../hooks/useFetchGames";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

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

  const { games, totalPages, loading, error } = useFetchGames(
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

  return (
    <div className="home-layout">
      <NavBar handleSearch={handleSearch} />
      <main className="home-container">
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && (
          <>
            <FilterPanel onFilter={handleFilter} />
            <GameList games={games} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
