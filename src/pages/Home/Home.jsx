import { useEffect, useState } from "react";
import {
  ErrorMessage,
  FilterPanel,
  GameList,
  Layout,
  Loader,
  NavBar,
  Pagination,
  SearchPanel,
} from "../../components";
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
    setFilters(newFilters);
    setSearchText("");
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

  const handleResetClick = () => {
    setSearchText("");
    setFilters({
      year: INITIAL_YEAR,
      genre: INITIAL_GENRE,
      platform: INITIAL_PLATFORM,
      tag: INITIAL_TAG,
      developer: INITIAL_DEVELOPER,
    });
    setCurrentPage(1);
  };

  const homeHeader = (
    <NavBar onResetClick={handleResetClick}>
      <SearchPanel onSearch={handleSearch} searchText={searchText} />
    </NavBar>
  );

  return (
    <Layout header={homeHeader}>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && (
        <>
          <FilterPanel onFilter={handleFilter} filters={filters} />
          {games.length > 0 ? (
            <GameList games={games} />
          ) : (
            <p className="no-games-message">No se encontraron juegos.</p>
          )}
          {games.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </Layout>
  );
}
