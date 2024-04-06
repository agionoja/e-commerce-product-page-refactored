import { useState } from "react";
import closeImg from "../assets/images/icon-close.svg";
import menuImg from "../assets/images/icon-menu.svg";
import logoImg from "../assets/images/logo.svg";
import PropTypes from "prop-types";

LogoMenu.propTypes = {
  onGetNavOpenStatus: PropTypes.func,
};

export default function LogoMenu({ onGetNavOpenStatus }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleClick = () => {
    setIsNavOpen((prevState) => {
      if (onGetNavOpenStatus instanceof Function) {
        onGetNavOpenStatus(isNavOpen, !prevState);
      }
      return !prevState;
    });
  };

  return (
    <div className={"flex items-center gap-4"}>
      <img
        onClick={handleClick}
        className={"z-20 w-6 cursor-pointer md:hidden"}
        src={isNavOpen ? closeImg : menuImg}
        alt=""
      />
      <img
        className={"min-w-16 md:min-w-24"}
        src={logoImg}
        alt="Sneaker Logo"
      />
    </div>
  );
}
