import { useParams } from "react-router-dom";
import Back from "../../assets/icons/Back";
import { ErrorMessage, Image, Layout, Loader, Trailer } from "../../components";
import { useFetchGameDetail } from "../../hooks/useFetchGameDetail";
import "./GameDetail.css";

export default function GameDetail() {
  const { gameId } = useParams();
  const { gameDetail, trailers, loading, error } = useFetchGameDetail(gameId);

  if (loading) return <Loader fullScreen />;
  if (error) return <ErrorMessage message={error} fullScreen />;

  const detailHeader = (
    <header className="detail-header">
      <div className="detail-header-layout">
        <a href="/" className="detail-anchor-back">
          <Back width={36} height={36} />
        </a>
        <h1 className="detail-header-title">{gameDetail.name}</h1>
      </div>
    </header>
  );

  return (
    <Layout header={detailHeader} isGrid isBackgroundBlack> 
      <div className="detail-image-layout">
        <Image
          src={gameDetail.backgroundImage}
          alt={gameDetail.name}
          className="game-image"
        />
      </div>
      <div className="detail-info">
        <h2>Genero</h2>
        <p className="genre">
          {gameDetail.genres.map((genre) => genre.name).join(", ")}
        </p>
        <h2>Fecha de Lanzamiento</h2>
        <p className="release">{gameDetail.releaseDate}</p>
        <h2>Plataforma</h2>
        <p className="platforms">
          {gameDetail.platforms
            .map((platform) => platform.platform.name)
            .join(", ")}
        </p>
        <h2>Metacritic Score</h2>
        <p className="score"> {gameDetail.metacritic}</p>
      </div>
      <div className="detail-info description">
        <div className="detail-description-layout">
          <h2>Descripción</h2>
          <p>{gameDetail.description}</p>
        </div>
      </div>
      <div className="detail-image-layout">
        <Image
          src={gameDetail.backgroundImageAdditional}
          alt={gameDetail.name}
          className="game-image"
        />
      </div>
      <div className="detail-trailer">
        <Trailer trailers={trailers} />
      </div>
    </Layout>
  );
}
