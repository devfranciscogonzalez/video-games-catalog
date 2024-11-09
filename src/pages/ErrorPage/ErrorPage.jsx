import PropTypes from "prop-types";
import Back from "../../assets/icons/Back";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="error-page-container">
      <ErrorMessage
        message="Lo sentimos, pero no pudimos encontrar la página que estás buscando.
        Puede que la página haya sido movida o eliminada."
      />
      <button
        className="error-page-button"
        onClick={handleGoBack}
        aria-label="Botón de volver a atrás"
      >
        <Back width={20} height={20} stroke="#fff" />
      </button>
    </div>
  );
}

ErrorPage.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func,
};
