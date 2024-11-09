import PropTypes from "prop-types";
import "./ErrorMessage.css";

export default function ErrorMessage({
  message = "Ha ocurrido un error inesperado. Por favor, intente de nuevo más tarde.",
  fullScreen = false,
}) {
  return (
    <div className={`error-container ${fullScreen ? "full-screen" : ""}`}>
      <div className="error-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>
      <h2 className="error-title">¡Ups! Algo salió mal</h2>
      <p className="error-message">{message}</p>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
  fullScreen: PropTypes.bool,
};
