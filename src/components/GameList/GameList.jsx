import { useState, useEffect } from "react";
import { fetchGames2024 } from "../../services/games";
import { GameCard } from "../GameCard/GameCard";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import "./GameList.css";
import { useFetchGames } from "../../hooks/useFetchGames";

export const GameList = () => {
  const { games, isLoading, error, refetch } = useFetchGames();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  return (
    <div className="games-container">
      <h1 className="games-title">Mejores Videojuegos del 2024</h1>
      <div className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};
