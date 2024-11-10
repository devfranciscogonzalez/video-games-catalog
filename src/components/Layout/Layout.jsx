import PropTypes from "prop-types";
import Footer from "../../components/Footer/Footer";

export default function Layout({ header, children }) {
  return (
    <div className="layout">
      {header}
      <main className="layout-main">{children}</main>
      <Footer />
    </div>
  );
}
Layout.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
