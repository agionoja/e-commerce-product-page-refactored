import PropTypes from "prop-types";

Header.propTypes = {
  children: PropTypes.any.isRequired,
};

export default function Header({ children }) {
  return (
    <header
      className={
        "relative flex flex-col items-center justify-center gap-10 py-4 md:py-8 "
      }
    >
      {children}
      <div
        className={
          "absolute bottom-0 hidden h-[2px] w-full bg-neutral__light-grayish-blue md:block"
        }
      ></div>
    </header>
  );
}
