import PropTypes from "prop-types";

const SelectFilter = ({
  label,
  name,
  handleChange,
  options,
  placeholder = "Todos",
}) => {
  return (
    <label>
      {label}:
      <select name={name} onChange={handleChange}>
        <option value="">{placeholder}</option>
        {options.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </label>
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
