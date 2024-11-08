import PropTypes from "prop-types";
import GameCard from "../GameCard/GameCard";
import "./GameList.css";

export default function GameList({ games }) {
  return (
    <div className="games-container">
      <div className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

GameList.propTypes = {
  games: PropTypes.array.isRequired,
};
