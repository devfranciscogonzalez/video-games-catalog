import PropTypes from "prop-types";
import { useState } from "react";
import {
  INITIAL_YEAR,
  INITIAL_DEVELOPER,
  INITIAL_GENRE,
  INITIAL_PLATFORM,
  INITIAL_TAG,
} from "../../constants/filterDefaults";
import SelectFilter from "../SelectFilter/SelectFilter";
import SelectFilterYear from "../SelectFilter/SelectFilterYear";
import "./FilterPanel.css";
import Filter from "../../assets/icons/Filter";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useFetchFilterOption } from "../../hooks/useFetchFilterOption";

const FilterPanel = ({ onFilter, filters }) => {
  const { options, loading, error } = useFetchFilterOption();

  const [formData, setFormData] = useState({
    year: INITIAL_YEAR || filters.year,
    genre: INITIAL_GENRE || filters.genre,
    platform: INITIAL_PLATFORM || filters.platform,
    tag: INITIAL_TAG || filters.tag,
    developer: INITIAL_DEVELOPER || filters.developer,
  });

  console.log(filters);
  console.log({ form: formData });
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
          value={formData.year}
          name="year"
          startYear={2000}
          endYear={2024}
          handleChange={handleChange}
        />
        <SelectFilter
          label="Género"
          value={formData.genre}
          name="genre"
          handleChange={handleChange}
          options={options.genres}
        />
        <SelectFilter
          label="Plataforma"
          value={formData.platform}
          name="platform"
          handleChange={handleChange}
          options={options.platforms}
        />
        <SelectFilter
          label="Tag"
          value={formData.tag}
          name="tag"
          handleChange={handleChange}
          options={options.tags}
        />
        <SelectFilter
          label="Desarrolladora"
          value={formData.developer}
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
  filters: PropTypes.shape({
    year: PropTypes.string,
    genre: PropTypes.string,
    platform: PropTypes.string,
    tag: PropTypes.string,
    developer: PropTypes.string,
  }).isRequired,
};

export default FilterPanel;
