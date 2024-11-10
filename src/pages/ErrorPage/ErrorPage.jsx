import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Back from "../../assets/icons/Back";
import { ErrorMessage } from "../../components";
import { ERRORS } from "../../constants/errorMessages";
import "./ErrorPage.css";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="error-page-container">
      <ErrorMessage message={ERRORS.PAGE_NOT_FOUND} />
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
