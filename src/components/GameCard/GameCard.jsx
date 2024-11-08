import PropTypes from "prop-types";
import "./GameCard.css";
import { useNavigate } from "react-router-dom";

export default function GameCard({ game }) {
  const getMetacriticClass = (score) => {
    if (score >= 75) return "metacritic-high";
    if (score >= 50) return "metacritic-medium";
    return "metacritic-low";
  };

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/games/${game.id}`);
  };

  return (
    <a className="game-card" onClick={handleCardClick}>
      <img src={game.backgroundImage} alt={game.name} className="game-image" />
      <div className="game-details">
          {/* <span className="release-date">Lanzamiento: {game.releaseDate}</span> */}
          {game.metacritic && (
            <span
              className={`metacritic-score ${getMetacriticClass(
                game.metacritic
              )}`}
            >
              {game.metacritic}
            </span>
          )}
        </div>
      <div className="game-info">
        <h2 className="game-title">{game.name}</h2>
     
        {/* <div className="genre-list">
          {game.genres?.map((genre) => (
            <span key={genre.id} className="genre-tag">
              {genre.name}
            </span>
          ))}
        </div> */}
      </div>
    </a>
  );
}

GameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    backgroundImage: PropTypes.string,
    releaseDate: PropTypes.string,
    metacritic: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }).isRequired,
};
