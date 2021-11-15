module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
