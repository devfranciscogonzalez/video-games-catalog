import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
      </div>
      <p className="loader-text">Cargando juegos...</p>
    </div>
  );
}
