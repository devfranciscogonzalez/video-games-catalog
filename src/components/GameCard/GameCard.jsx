import PropTypes from "prop-types";
import "./GameCard.css";

export default function GameCard({ game }) {
  const getMetacriticClass = (score) => {
    if (score >= 85) return "metacritic-high";
    if (score >= 70) return "metacritic-medium";
    return "metacritic-low";
  };
  console.log(game);

  return (
    <div className="game-card">
      <img src={game.background_image} alt={game.name} className="game-image" />
      <div className="game-info">
        <h2 className="game-title">{game.name}</h2>
        <div className="game-details">
          <span className="release-date">
            Release: {new Date(game.released).toLocaleDateString()}
          </span>
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
        <div className="genre-list">
          {game.genres?.map((genre) => (
            <span key={genre.id} className="genre-tag">
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.required,
    background_image: PropTypes.string,
    released: PropTypes.string,
    metacritic: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }).isRequired,
};
