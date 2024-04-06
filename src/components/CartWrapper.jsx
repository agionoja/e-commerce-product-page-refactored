import PropTypes from "prop-types";

CartWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default function CartWrapper({
  className,
  children,
}) {
  return (
    <div
      className={`${className} absolute left-0  right-0 top-10 mx-auto flex  flex-col justify-center gap-8 rounded-lg bg-white  px-5 pb-8 pt-4 text-neutral__dark-grayish-blue  shadow-lg md:top-16  md:mx-0 md:ml-auto md:w-93.75`}
    >
      <h2 className={" mb-8 font-bold"}>Cart</h2>
      <div
        className={
          "line-break absolute left-0 right-0 top-20 mx-auto mb-8 "
        }
      ></div>
      {children}
    </div>
  );
}
