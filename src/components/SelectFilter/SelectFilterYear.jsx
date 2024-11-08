import PropTypes from "prop-types";

const SelectFilterYear = ({
  label,
  name,
  startYear = 2000,
  endYear = new Date().getFullYear(),
  handleChange,
}) => {
  const generateYearOptions = () => {
    const years = [];
    for (let year = endYear; year >= startYear; year--) {
      years.push(year);
    }
    return years;
  };
  return (
    <label>
      {label}
      <select name={name} onChange={handleChange}>
        <option value="">{label}</option>
        {generateYearOptions().map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </label>
  );
};

SelectFilterYear.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  startYear: PropTypes.number.isRequired,
  endYear: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectFilterYear;
