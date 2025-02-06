import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        eoinblue: {
          "50": "#e8f1fb",
          "100": "#d1e4f6",
          "200": "#a3c8ed",
          "300": "#75ade4",
          "400": "#4791db",
          "500": "#1976d2",
          "600": "#145ea8",
          "700": "#0f477e",
          "800": "#0a2f54",
          "900": "#05182a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
