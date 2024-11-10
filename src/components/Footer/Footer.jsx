import PropTypes from "prop-types";
import "./Footer.css";

export default function Footer({ border }) {
  return (
    <footer className="footer">
      <div className={`footer-layout ${border ? "footer-layout-border" : ""}`}>
        <span>Construido con React y CSS | 2024</span>
        <a
          href="https://www.franciscogonzalez.dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pagina web de Francisco González"
          className="footer-anchor"
        >
          franciscogonzalez.dev
        </a>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  border: PropTypes.bool,
};
