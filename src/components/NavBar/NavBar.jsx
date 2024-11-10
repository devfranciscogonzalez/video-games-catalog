import PropTypes from "prop-types";
import Joystick from "../../assets/icons/Joystick";
import "./NavBar.css";

const NavBar = ({ children }) => {
  return (
    <header className="navbar-header">
      <nav className="navbar-layout">
        <a href="/" className="navbar-logo" aria-label="Logo de la pagina web">
          <Joystick width={42} height={42} />
        </a>
        {children}
      </nav>
    </header>
  );
};

NavBar.propTypes = {
  children: PropTypes.node,
};

export default NavBar;
