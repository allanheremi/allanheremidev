/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2a2a2a",
        secondary: "#A084E8",
        tertiary: "#3f3f3f",
        "black-100": "#3f3f3f",
        "black-200": "#090325",
        "white-100": "#DDDDDD",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": ["url('/src/assets/testherobg.jpeg')", "url('/src/assets/herobg.png')"],
      },
      linearGradientColors: {
        'transparent-to-primary': ['transparent', '#2a2a2a'],
        'primary-to-transparent': ['#2a2a2a', 'transparent'],
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
};
