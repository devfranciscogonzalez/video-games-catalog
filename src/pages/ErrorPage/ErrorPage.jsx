import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Back from "../../assets/icons/Back";
import "./ErrorPage.css";

export default function ErrorPage() {
  const navigate = useNavigate();

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
      <p className="error-message">
        Lo sentimos, pero no pudimos encontrar la página que estás buscando.
        Puede que la página haya sido movida o eliminada.
      </p>
      <div className="error-button-layout">
        <button
          className="error-button"
          onClick={() => navigate("/")}
          aria-label="Botón de volver a la página principal"
        >
          <Back width={20} height={20} stroke="#fff" />
        </button>
      </div>
    </div>
  );
}

ErrorPage.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func,
};
