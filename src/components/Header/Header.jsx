import "./Header.css";
import Joystick from "../../assets/icons/Joystick";

export default function Header() {
  return (
    <header className="header">
      <div className="icon-container">
        <Joystick />
      </div>
      <p className="header-text">Bienvenido al Top juegos del 2024</p>
    </header>
  );
}
