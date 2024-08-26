/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        llbrown: "#5C3516",
        llblack: "#3A3A3A",
        llcream: "#F0E2D5",
        llbeige: "#CEC2AC",

      },
       fontFamily: {
        cg: ["var(--font-cg)"],
        ws: ["var(--font-ws)"],
      },
        backgroundImage: {
        "hero-bg": "url('/villa-images/Mint Villa-2.webp')",
      },
    },
  },
  plugins: [],
};
