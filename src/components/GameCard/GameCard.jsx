import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import Image from "../Image/Image";
import Score from "../Score/Score";
import "./GameCard.css";

export default function GameCard({ game }) {
  const navigate = useNavigate();
  const { id, name, backgroundImage, releaseDate, metacritic } = game;

  const handleCardClick = () => {
    navigate(`/games/${id}`);
  };

  return (
    <Link className="game-card" onClick={handleCardClick}>
      <Image src={backgroundImage} alt={name} className="game-image" />
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
