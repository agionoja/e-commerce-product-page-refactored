import PropTypes from "prop-types";
import LogoMenu from "./LogoMenu.jsx";
import Nav from "./navigation/Nav.jsx";
import Profile from "./Profile.jsx";

Header.propTypes = {
  children: PropTypes.any.isRequired,
};

export default function Header({ children }) {
  return (
    <header
      className={
        "relative flex items-center justify-between gap-8 py-4 md:pb-8 md:pt-6"
      }
    >
      <div
        className={"flex items-center justify-center gap-8"}
      >
        <LogoMenu onGetNavOpenStatus={""} />
        <Nav isNavOpen={""} />
      </div>
      <Profile onGetCartOpenStatus={""} />
      {children}
      <div
        className={
          "line-break absolute  bottom-0 hidden md:block"
        }
      ></div>
    </header>
  );
}
