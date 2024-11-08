import PropTypes from "prop-types";
import Joystick from "../../assets/icons/Joystick";
import SearchPanel from "../SearchPanel/SearchPanel";
import "./NavBar.css";

const NavBar = ({ handleSearch }) => {
  return (
    <header className="navbar-header">
      <nav className="navbar-layout">
        <a href="/" className="navbar-logo">
          <Joystick width={42} height={42} />
        </a>
        <SearchPanel onSearch={handleSearch} />
      </nav>
    </header>
  );
};

NavBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default NavBar;
