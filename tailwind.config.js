/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: "#307EF4",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        secondary:"#9E9E9E"
      },
      boxShadow:{
        card:"21px 27px 50px -8px rgba(212, 178, 178 ,0.17)"
      },
      borderRadius:{
        card:"25px"
      }
    },
  },
  plugins: [],
};
