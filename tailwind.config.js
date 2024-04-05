/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", "ui-sans-serif"],
      },
      colors: {
        primary__orange: "hsl(26, 100%, 55%)",
        "primary__pale-orange":
          "hsl(25, 100%, 94%)",
        "neutral__very-dark-blue":
          "hsl(220, 13%, 13%)",
        "neutral__dark-grayish-blue":
          "hsl(219, 9%, 45%)",
        "neutral__grayish-blue":
          "hsl(220, 14%, 75%)",
        "neutral__light-grayish-blue":
          "hsl(223, 64%, 98%)",
        "neutral__black-lightbox":
          "hsl(0, 0%, 0%)",
      },
      width: {
        360: "90rem",
        93.75: "23.4375rem",
        91.75: "22.9375rem",
        88: "22rem",
      },
      maxWidth: {
        360: "90rem",
        93.75: "22.9375rem",
      },
      minWidth: {
        192: "48rem",
        75: "18.7rem",
      },
    },
  },
  plugins: [],
};
