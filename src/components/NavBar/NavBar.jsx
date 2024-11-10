import PropTypes from "prop-types";
import Joystick from "../../assets/icons/Joystick";
import "./NavBar.css";

const NavBar = ({ onLogoClick, children }) => {
  return (
    <header className="navbar-header">
      <nav className="navbar-layout">
        <a
          href="/"
          className="navbar-logo"
          aria-label="Logo de la página web"
          onClick={onLogoClick}
        >
          <Joystick width={42} height={42} />
        </a>
        {children}
      </nav>
    </header>
  );
};

NavBar.propTypes = {
  onLogoClick: PropTypes.func,
  children: PropTypes.node,
};

export default NavBar;
