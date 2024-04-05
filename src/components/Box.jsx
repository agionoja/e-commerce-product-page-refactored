import PropTypes from "prop-types";

Box.propTypes = {
  children: PropTypes.any.isRequired,
};

export default function Box({ children }) {
  return <div className="box">{children}</div>;
}
