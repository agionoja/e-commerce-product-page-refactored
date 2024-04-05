import PropTypes from "prop-types";

Header.propTypes = {
  children: PropTypes.any.isRequired,
};

export default function Header({ children }) {
  return (
    <header
      className={
        "flex flex-col items-center justify-center gap-10 py-4 md:py-8 "
      }
    >
      {children}
      <div
        className={"line-break hidden md:block"}
      ></div>
    </header>
  );
}
