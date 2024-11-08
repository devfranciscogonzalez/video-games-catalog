import PropTypes from "prop-types";
import "./Score.css";

const Score = ({ score }) => {
  const getMetacriticClass = () => {
    if (score >= 75) return "metacritic-high";
    if (score >= 50) return "metacritic-medium";
    return "metacritic-low";
  };

  return (
    <span className={`metacritic-score ${getMetacriticClass()}`}>{score}</span>
  );
};

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
