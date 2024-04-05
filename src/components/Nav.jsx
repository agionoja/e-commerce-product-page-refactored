import { useState } from "react";
import PropTypes from "prop-types";
import avatarImg from "../assets/images/image-avatar.png";
import cartImg from "../assets/images/icon-cart.svg";
import menuImg from "../assets/images/icon-menu.svg";
import closeImg from "../assets/images/icon-close.svg";
import logoImg from "../assets/images/logo.svg";

Nav.propTypes = {
  children: PropTypes.any.isRequired,
};
export default function Nav({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={"nav relative"}>
      <div className={"flex items-center gap-16"}>
        <div
          className={"flex items-center gap-4"}
        >
          <img
            onClick={() =>
              setIsOpen((prevState) => !prevState)
            }
            className={
              "z-20 cursor-pointer md:hidden"
            }
            src={isOpen ? closeImg : menuImg}
            alt=""
          />
          <img
            className={"min-w-24"}
            src={logoImg}
            alt="Sneaker Logo"
          />
        </div>
        <ul
          className={`nav-ul ${isOpen ? "nav-ul__show" : "nav-ul__hide"}`}
        >
          <li>
            <button>Collections</button>
          </li>
          <li>
            <button>Men</button>
          </li>
          <li>
            <button>Women</button>
          </li>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </div>
      {children}
      <div className={"flex gap-5 md:mr-16"}>
        <button className={"w-8"}>
          <img
            className={"object-contain"}
            src={cartImg}
            alt="cart"
          />
        </button>
        <img
          className={"w-8 object-contain md:w-12"}
          src={avatarImg}
          alt="user image"
        />
      </div>
    </nav>
  );
}
