import PropTypes from "prop-types";

Cart.prototype = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default function Cart({
  name,
  image,
  price,
  quantity,
  className,
}) {
  return <div></div>;
}
