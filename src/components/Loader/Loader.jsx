import PropTypes from "prop-types";
import "./Loader.css";

export default function Loader({ fullScreen = false }) {
  return (
    <div className={`loader-container ${fullScreen ? "full-screen" : ""}`}>
      <span className="loader"></span>
    </div>
  );
}

Loader.propTypes = {
  fullScreen: PropTypes.bool,
};
