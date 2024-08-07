/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100ch",
          },
          img: {
            width: "100%",
          },
        },
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
