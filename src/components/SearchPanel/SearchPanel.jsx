import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Search from "../../assets/icons/Search";
import "./SearchPanel.css";

const SearchPanel = ({ onSearch, searchText }) => {
  const [formData, setFormData] = useState("");

  useEffect(() => {
    setFormData(searchText);
  }, [searchText]);

  const handleInputChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={formData}
        placeholder="Buscar juegos..."
        onChange={handleInputChange}
        className="search-input"
      />
      <button
        type="submit"
        className="search-button"
        aria-label="Botón de buscar video juegos"
      >
        <Search width={14} height={14} />
      </button>
    </form>
  );
};

SearchPanel.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchPanel;
