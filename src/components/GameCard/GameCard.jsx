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
      <Image src={backgroundImage} alt={name} />
      {metacritic && <Score score={metacritic} />}
      <footer className="game-card-info">
        <h2 className="game-card-title">{name}</h2>
        <span className="game-card-date">{releaseDate}</span>
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
