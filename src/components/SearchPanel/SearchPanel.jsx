import PropTypes from "prop-types";
import { useState } from "react";
import "./SearchPanel.css";

const SearchPanel = ({ onSearch }) => {
  const [formData, setFormData] = useState("");

  const handleInputChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(formData);
    onSearch(formData); 
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Buscar juegos..."
        onChange={handleInputChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Buscar
      </button>
    </form>
  );
};

SearchPanel.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchPanel;
