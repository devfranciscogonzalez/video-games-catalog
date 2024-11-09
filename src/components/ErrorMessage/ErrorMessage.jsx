import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Back from "../../assets/icons/Back";
import Retry from "../../assets/icons/Retry";
import "./ErrorMessage.css";

export default function ErrorMessage({
  message = "Ha ocurrido un error inesperado. Por favor, intente de nuevo más tarde.",
  onRetry,
}) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="error-container">
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
      <div className="error-button-layout">
        <button
          className="error-button"
          onClick={handleGoBack}
          aria-label="Botón de volver a atrás"
        >
          <Back width={20} height={20} stroke="#fff" />
        </button>
        {onRetry && (
          <button
            className="error-button"
            onClick={onRetry}
            aria-label="Botón de volver a intentar"
          >
            <Retry width={20} height={20} />
          </button>
        )}
      </div>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func,
};
