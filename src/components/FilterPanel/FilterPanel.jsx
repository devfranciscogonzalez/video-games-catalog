import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  INITIAL_YEAR,
  INITIAL_DEVELOPER,
  INITIAL_GENRE,
  INITIAL_PLATFORM,
  INITIAL_TAG,
} from "../../constants/filterDefaults";
import { fetchFilterOptions } from "../../services/filter";
import SelectFilter from "../SelectFilter/SelectFilter";
import SelectFilterYear from "../SelectFilter/SelectFilterYear";
import "./FilterPanel.css";
import Filter from "../../assets/icons/Filter";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const FilterPanel = ({ onFilter }) => {
  const [options, setOptions] = useState({
    genres: [],
    platforms: [],
    tags: [],
    developers: [],
  });

  const [formData, setFormData] = useState({
    year: INITIAL_YEAR,
    genre: INITIAL_GENRE,
    platform: INITIAL_PLATFORM,
    tag: INITIAL_TAG,
    developer: INITIAL_DEVELOPER,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFilterOptions = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchFilterOptions();
        setOptions(data);
      } catch (err) {
        setError("Error al cargar opciones de filtros");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    loadFilterOptions();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  if (loading) return;

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="filter-panel">
        <legend>Panel de Filtrado</legend>
        <SelectFilterYear
          label="Año"
          name="year"
          startYear={2000}
          endYear={2024}
          handleChange={handleChange}
        />
        <SelectFilter
          label="Género"
          name="genre"
          handleChange={handleChange}
          options={options.genres}
        />
        <SelectFilter
          label="Plataforma"
          name="platform"
          handleChange={handleChange}
          options={options.platforms}
        />
        <SelectFilter
          label="Tag"
          name="tag"
          handleChange={handleChange}
          options={options.tags}
        />
        <SelectFilter
          label="Desarrolladora"
          name="developer"
          handleChange={handleChange}
          options={options.developers}
        />
        <button
          type="submit"
          className="filter-panel-button"
          aria-label="Botón de filtrar"
        >
          <Filter width={16} />
          Filtrar
        </button>
      </fieldset>
    </form>
  );
};

FilterPanel.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default FilterPanel;
