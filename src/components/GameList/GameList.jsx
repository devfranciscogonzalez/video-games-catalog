import PropTypes from "prop-types";
import GameCard from "../GameCard/GameCard";
import "./GameList.css";

export default function GameList({ games }) {
  return (
    <section className="games-container">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </section>
  );
}

GameList.propTypes = {
  games: PropTypes.array.isRequired,
};
