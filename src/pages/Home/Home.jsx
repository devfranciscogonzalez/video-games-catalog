import { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import Footer from "../../components/Footer/Footer";
import GameList from "../../components/GameList/GameList";
import Loader from "../../components/Loader/Loader";
import NavBar from "../../components/NavBar/NavBar";
import Pagination from "../../components/Pagination/Pagination";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import {
  INITIAL_DEVELOPER,
  INITIAL_GENRE,
  INITIAL_PLATFORM,
  INITIAL_TAG,
  INITIAL_YEAR,
} from "../../constants/filterDefaults";
import { useFetchGames } from "../../hooks/useFetchGames";
import { getFromLocalStorage, setToLocalStorage } from "../../utils/storage";
import "./Home.css";

export default function Home() {
  const [filters, setFilters] = useState(() =>
    getFromLocalStorage("filters", {
      year: INITIAL_YEAR,
      genre: INITIAL_GENRE,
      platform: INITIAL_PLATFORM,
      tag: INITIAL_TAG,
      developer: INITIAL_DEVELOPER,
    })
  );
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { games, totalPages, loading, error } = useFetchGames(
    filters,
    searchText,
    currentPage
  );

  useEffect(() => {
    setToLocalStorage("filters", filters);
  }, [filters]);

  const handleFilter = (newFilters) => {
    setSearchText("");
    setFilters(newFilters);
  };

  const handleSearch = (newSearchText) => {
    setSearchText(newSearchText);
    setFilters({
      year: INITIAL_YEAR,
      genre: INITIAL_GENRE,
      platform: INITIAL_PLATFORM,
      tag: INITIAL_TAG,
      developer: INITIAL_DEVELOPER,
    });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="home-layout">
      <NavBar>
        <SearchPanel onSearch={handleSearch} searchText={searchText} />
      </NavBar>
      <main className="home-container">
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && (
          <>
            <FilterPanel onFilter={handleFilter} filters={filters} />
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
