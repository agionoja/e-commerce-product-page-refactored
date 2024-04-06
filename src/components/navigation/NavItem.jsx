import { useState } from "react";
import NavItemHoverEffect from "./NavItemHoverEffect.jsx";
import PropTypes from "prop-types";

NavItem.propTypes = {
  content: PropTypes.string.isRequired,
};
export function NavItem({ content }) {
  const [isHovered, setHovered] = useState(false);
  return (
    <li
      className={"relative w-fit"}
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
    >
      <button>{content}</button>
      {isHovered && <NavItemHoverEffect />}
    </li>
  );
}
