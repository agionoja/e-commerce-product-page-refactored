import PropTypes from "prop-types";

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Main({ children }) {
  return <main>{children}</main>;
}
