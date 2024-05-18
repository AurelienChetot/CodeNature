/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nature: ["Nature", "sans-serif"],
      },
      margin: {
        "305px": "305px",
      },
      maxWidth: {
        containText: "65ch",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        forest: {
          ...require("daisyui/src/theming/themes")["forest"],
          "--rounded-btn": "0.50rem",
        },
      },
    ],
  },
};
