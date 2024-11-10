import PropTypes from "prop-types";
import "./Trailer.css";

export default function Trailer({ trailers }) {
  return (
    <div className="trailers-section">
      <h2 className="trailers-section-title">Trailers</h2>
      {trailers.length > 0 ? (
        <div className="trailers-container">
          {trailers.map(({ id, name, trailerVideoUrl }) => (
            <div key={id} className="trailer-item">
              <video controls className="trailer-video">
                <source src={trailerVideoUrl} type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
              <p className="trailer-name">{name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-trailers-message">No hay trailers disponibles.</p>
      )}
    </div>
  );
}

Trailer.propTypes = {
  trailers: PropTypes.array.isRequired,
};
