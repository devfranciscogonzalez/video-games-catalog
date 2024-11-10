import PropTypes from "prop-types";
import Joystick from "../../assets/icons/Joystick";
import "./NavBar.css";

export default function NavBar({ onResetClick, children }) {
  return (
    <header className="navbar-header">
      <nav className="navbar-layout">
        <a
          href="/"
          className="navbar-logo"
          onClick={onResetClick}
          aria-label="Logo de la página web"
        >
          <Joystick width={42} height={42} />
        </a>
        {children}
      </nav>
    </header>
  );
}

NavBar.propTypes = {
  onResetClick: PropTypes.func,
  children: PropTypes.node,
};
