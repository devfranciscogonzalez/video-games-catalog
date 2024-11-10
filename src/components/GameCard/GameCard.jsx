import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import defaultImage from "../../assets/images/no-image.svg";
import Score from "../Score/Score";
import "./GameCard.css";
import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  const navigate = useNavigate();
  const { id, name, backgroundImage, releaseDate, metacritic } = game;

  const handleCardClick = () => {
    navigate(`/games/${id}`);
  };

  return (
    <Link className="game-card" onClick={handleCardClick}>
      <img
        src={backgroundImage || defaultImage}
        alt={name || "Imagen no disponible"}
        className="game-image"
      />
      {metacritic && <Score score={metacritic} />}
      <footer className="game-info">
        <div>
          <h2 className="game-title">{name}</h2>
        </div>
        <span className="game-date">{releaseDate}</span>
      </footer>
    </Link>
  );
}

GameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    backgroundImage: PropTypes.string,
    releaseDate: PropTypes.string,
    metacritic: PropTypes.number,
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
