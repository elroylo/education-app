module.exports = {
  daisyui: {
    themes: [
      {
        main: {
          "primary": "#85b3f4",
          "secondary": "#34eb86",
          "accent": "#37CDBE",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },

      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
}
