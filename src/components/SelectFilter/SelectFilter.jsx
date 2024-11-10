import PropTypes from "prop-types";
import "./SelectFilter.css";

const SelectFilter = ({
  label,
  value,
  name,
  handleChange,
  options,
  placeholder = "Todos",
}) => {
  console.log(value);
  return (
    <select
      name={name}
      value={value}
      onChange={handleChange}
      className="select-filter"
      aria-label={`Filtrar por ${label}`}
    >
      <option value="" disabled>
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
