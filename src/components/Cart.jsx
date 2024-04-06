import PropTypes from "prop-types";
import deleteIcon from "../assets/images/icon-delete.svg";
import CartWrapper from "./CartWrapper.jsx";

Cart.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onCartClear: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default function Cart({
  name,
  image,
  price,
  quantity,
  onCartClear,
  className,
}) {
  if (quantity)
    return (
      <CartWrapper className={className}>
        <div className={"flex items-center gap-4"}>
          <div className={"flex items-start gap-4"}>
            <div
              className={"w-12 overflow-hidden md:w-14 "}
            >
              <img
                className={"rounded-lg object-contain"}
                src={image}
                alt={name}
              />
            </div>
            <div className={""}>
              <h3 className={"text-sm "}>{name}</h3>
              <div className={"flex gap-2"}>
                <span>${price}</span>
                <span>x {quantity}</span>
                <span
                  className={
                    "font-bold text-neutral__black-lightbox"
                  }
                >
                  {price * quantity}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onCartClear}
            className={"ml-auto"}
          >
            <img src={deleteIcon} alt="" />
          </button>
        </div>
        <button className={"btn"}>Checkout</button>
      </CartWrapper>
    );
  else
    return (
      <CartWrapper className={className}>
        <h3
          className={
            "py-[3.88rem] text-center text-lg font-medium"
          }
        >
          Your cart is empty.
        </h3>
      </CartWrapper>
    );
}
