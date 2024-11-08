import PropTypes from "prop-types";
import "./SelectFilter.css";

const SelectFilter = ({
  label,
  name,
  handleChange,
  options,
  placeholder = "Todos",
}) => {
  return (
    <select name={name} onChange={handleChange} className="select-filter">
      <option value="" disabled selected>
        {label}
      </option>
      <option value="">{placeholder}</option>
      {options.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
};

SelectFilter.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
};

export default SelectFilter;
