import PropTypes from "prop-types";
import { NavItemHoverEffect } from "./NavItemHoverEffect.jsx";
import { NavItem } from "./NavItem.jsx";

Nav.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
};

const navContent = [
  "Collections",
  "Men",
  "Women",
  "About",
  "Contact",
];
export default function Nav({ isNavOpen }) {
  return (
    <nav
      className={`header-nav ${isNavOpen ? "h-screen" : "h-full"} `}
    >
      <ul
        className={`header-nav__ul ${isNavOpen ? "header-nav__ul__show" : "header-nav__ul__hide"}`}
      >
        {navContent.map((content) => (
          <NavItem key={content} content={content} />
        ))}
      </ul>
    </nav>
  );
}
