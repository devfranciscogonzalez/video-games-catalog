import PropTypes from "prop-types";
import defaultImage from "../../assets/images/no-image.svg";
import "./Image.css";

export default function Image({ src, alt, className }) {
  return (
    <img
      src={src || defaultImage}
      alt={alt || "Imagen no disponible"}
      className={className}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};
