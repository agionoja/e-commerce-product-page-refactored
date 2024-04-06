import cartImg from "../assets/images/icon-cart.svg";
import avatarImg from "../assets/images/image-avatar.png";
import PropTypes from "prop-types";
import { useState } from "react";

Profile.propTypes = {
  onGetCartOpenStatus: PropTypes.func,
  quantity: PropTypes.number,
};

export default function Profile({
  onGetCartOpenStatus,
  quantity,
}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleClick = () => {
    setIsCartOpen((prevState) => {
      if (onGetCartOpenStatus instanceof Function) {
        onGetCartOpenStatus(isCartOpen, !prevState);
      }
      return !prevState;
    });
  };

  return (
    <div className={"relative flex gap-5 md:gap-8"}>
      <button className={""} onClick={handleClick}>
        <img
          className={
            "min-w-6 max-w-8 md:min-w-8 md:max-w-12"
          }
          src={cartImg}
          alt="cart"
        />
      </button>
      <img
        className={"min-w-8 max-w-10 md:max-w-12 "}
        src={avatarImg}
        alt="user image"
      />
      {
        <span
          className={`${!quantity && "hidden"} absolute left-3 top-3 flex h-4 w-6 items-center justify-center rounded-3xl bg-primary__orange text-xs font-bold text-primary__pale-orange`}
        >
          {quantity}
        </span>
      }
    </div>
  );
}
