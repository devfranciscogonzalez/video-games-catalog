import PropTypes from "prop-types";
import "./SelectFilter.css";

export default function SelectFilterYear({
  label,
  value,
  name,
  startYear = 2000,
  endYear = new Date().getFullYear(),
  handleChange,
  placeholder = "Todos",
}) {
  const generateYearOptions = () => {
    const years = [];
    for (let year = endYear; year >= startYear; year--) {
      years.push(year);
    }
    return years;
  };
  return (
    <select
      name={name}
      onChange={handleChange}
      className="select-filter"
      value={value}
      aria-label={`Filtrar por ${label}`}
    >
      <option value="" disabled>
        {label}
      </option>
      <option value="">{placeholder}</option>
      {generateYearOptions().map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}

SelectFilterYear.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  startYear: PropTypes.number.isRequired,
  endYear: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
