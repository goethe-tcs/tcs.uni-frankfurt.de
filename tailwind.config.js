/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.css",
    "./content/**/*.{html,js,jsx,ts,tsx,md}",
    "./layouts/**/*.{html,js,jsx,ts,tsx,md}",
    "./public/**/*.{html,js,jsx,ts,tsx,md}",
  ],
  theme: {
    extend: {
      colors: {
        goethe: {
          50: "#D5E5EC",
          100: "#AACADA",
          200: "#80B0C7",
          300: "#5596B4",
          400: "#2B7BA2",
          500: "hsl(199deg 100% 28%)",
          DEFAULT: "hsl(199deg 100% 28%)",
          600: "#005177",
          700: "#00415F",
          800: "#003148",
          900: "#002030",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        goethe_light: {
          primary: "rgb(0,97,143)",
          secondary: "rgb(77,75,70)",
          accent: "rgb(134,0,71)",
          neutral: "rgb(77,75,70)",
          "neutral-content": "rgb(0,0,0)",
          "base-100": "rgb(248,246,245)",
          info: "#d5e5ec",
          success: "rgb(165,171,82)",
          warning: "rgb(227,186,15)",
          error: "#fb7185",
        },
        goethe_dark: {
          primary: "rgb(0,97,143)",
          secondary: "rgb(77,75,70)",
          accent: "rgb(134,0,71)",
          neutral: "rgb(0,0,0)",
          "neutral-content": "rgb(255,255,255)",
          "base": "rgb(0,0,0)",
          "base-100": "#111",
          "base-200": "#333",
          info: "#d5e5ec",
          success: "rgb(165,171,82)",
          warning: "rgb(227,186,15)",
          error: "#fb7185",
        },
      },
    ],
    darkTheme: "goethe_dark",
  },
  plugins: [require("daisyui")],
}
