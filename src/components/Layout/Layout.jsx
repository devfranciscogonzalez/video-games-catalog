import PropTypes from "prop-types";
import { Footer } from "../../components";
import "./Layout.css";

export default function Layout({
  header,
  isGrid,
  isBackgroundBlack,
  children,
}) {
  return (
    <div
      className={`layout ${isBackgroundBlack ? "layout-background-black" : ""}`}
    >
      {header}
      <main className={`${isGrid ? "layout-grid" : "layout-flex"}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
Layout.propTypes = {
  header: PropTypes.node.isRequired,
  isGrid: PropTypes.bool,
  isBackgroundBlack: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
