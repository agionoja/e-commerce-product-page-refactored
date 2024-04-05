import PropTypes from "prop-types";
import deleteIcon from "../assets/images/icon-delete.svg";

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
  return (
    <div
      className={`${className} absolute  left-0 right-0 top-16 mx-auto flex flex-col justify-center gap-6 rounded-lg  bg-white px-5 pb-8 pt-4  text-neutral__dark-grayish-blue shadow-lg  md:mx-0 md:ml-auto md:w-93.75`}
    >
      <h2 className={" mb-8 font-bold"}>Cart</h2>
      <div
        className={
          "line-break absolute left-0 right-0 top-20 mx-auto mb-8 "
        }
      ></div>
      <div className={"flex items-center gap-4"}>
        <div className={"w-12 overflow-hidden "}>
          <img
            className={
              "rounded-lg object-contain"
            }
            src={image}
            alt={name}
          />
        </div>
        <div className={""}>
          <h3>{name}</h3>
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
        <button
          onClick={() => onCartClear}
          className={"ml-auto"}
        >
          <img src={deleteIcon} alt="" />
        </button>
      </div>
      <button className={"btn"}>Checkout</button>
    </div>
  );
}
