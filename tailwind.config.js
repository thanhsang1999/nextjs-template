module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}","./page/**/*.{js,jsx,ts,tsx}"],
  content: [
    './src/**/*.{html,js,tsx,ts,jsx}',
    './pages/**/*.{html,js,tsx,ts,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
