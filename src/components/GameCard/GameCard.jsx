import PropTypes from "prop-types";
import "./GameCard.css";
import { useNavigate } from "react-router-dom";
import Score from "../Score/Score";

export default function GameCard({ game }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/games/${game.id}`);
  };

  return (
    <a className="game-card" onClick={handleCardClick}>
      <img src={game.backgroundImage} alt={game.name} className="game-image" />
      <div className="game-details">
        {game.metacritic && <Score score={game.metacritic} />}
      </div>
      <footer className="game-info">
        <div>
          <h2 className="game-title">{game.name}</h2>
        </div>
        <span className="game-date">{game.releaseDate}</span>
      </footer>
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

{
  /* <div className="genre-list">
          {game.genres?.map((genre) => (
            <span key={genre.id} className="genre-tag">
              {genre.name}
            </span>
          ))}
        </div> */
}
