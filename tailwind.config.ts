import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          100: "#FFF7E6",
          300: "#F5D489",
          500: "#D4AF37",
          600: "#B28F2A"
        }
      },
      boxShadow: {
        glow: "0 0 30px rgba(212, 175, 55, 0.25)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 20% 20%, rgba(212,175,55,0.25), transparent 35%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.08), transparent 30%), radial-gradient(circle at 50% 100%, rgba(212,175,55,0.12), transparent 45%)"
      }
    }
  },
  plugins: []
};

export default config;
