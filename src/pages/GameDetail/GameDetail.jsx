import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import adaptGameDetails from "../../adapters/adaptGameDetails";
import Back from "../../assets/icons/Back";
import { httpClient } from "../../services/httpClient";
import "./GameDetail.css";
import Footer from "../../components/Footer/Footer";

export default function GameDetail() {
  const { gameId } = useParams();
  const [gameDetail, setGameDetail] = useState(null);
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    async function fetchGameDetails() {
      try {
        const response = await httpClient.get(`/games/${gameId}`);
        setGameDetail(adaptGameDetails(response.data));
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    }

    async function fetchTrailers() {
      try {
        const trailerResponse = await httpClient.get(`/games/${gameId}/movies`);
        setTrailers(trailerResponse.data.results);
      } catch (error) {
        console.error("Error fetching trailers:", error);
      }
    }

    fetchGameDetails();
    fetchTrailers();
  }, [gameId]);

  if (!gameDetail) {
    return <p>Loading...</p>;
  }

  return (
    <div className="detail-layout">
      <header className="detail-header">
        <div className="detail-header-layout">
          <a href="/" className="detail-anchor-back">
            <Back width={36} height={36} />
          </a>
          <h1 className="detail-header-title">{gameDetail.name}</h1>
        </div>
      </header>
      <main className="detail-container">
        <div className="detail-image-layout">
          <img
            src={gameDetail.backgroundImage}
            alt={gameDetail.name}
            className="detail-image"
          />
        </div>
        <div className="detail-info">
          <h2>Genero</h2>
          <p className="genre">
            {gameDetail.genres.map((genre) => genre.name).join(", ")}
          </p>
          <h2>Fecha de Lanzamiento</h2>
          <p className="release">{gameDetail.releaseDate}</p>
          <h2>Plataforma:</h2>
          <p className="platforms">
            {gameDetail.platforms
              .map((platform) => platform.platform.name)
              .join(", ")}
          </p>
          <h2>Metacritic Score:</h2>
          <p className="score"> {gameDetail.metacritic}</p>
        </div>
        <div className="detail-info description">
          <div className="detail-description-layout">
            <h2>Descripción:</h2>
            <p>{gameDetail.description}</p>
          </div>
        </div>
        <div className="detail-image-layout">
          <img
            src={gameDetail.backgroundImageAdditional}
            alt={gameDetail.name}
            className="detail-image"
          />
        </div>
      </main>
      {trailers.count > 0 && (
        <div className="trailers-section">
          <h3>Trailers</h3>
          <div className="trailers-container">
            {trailers.results.map((trailer, index) => (
              <div key={index} className="trailer-item">
                <video controls className="trailer-video">
                  <source src={trailer.data.max} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="trailer-name">{trailer.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
