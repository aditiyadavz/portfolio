/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        body: ["'Satoshi'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg: "#050510",
        surface: "#0c0c1e",
        card: "#111128",
        border: "#1e1e3f",
        accent: "#6c63ff",
        accent2: "#00d4ff",
        accent3: "#ff6b9d",
        muted: "#4a4a6a",
        text: "#e2e2f0",
        dim: "#8888aa",
      },
      backgroundImage: {
        "glow-conic": "conic-gradient(from 180deg at 50% 50%, #6c63ff 0deg, #00d4ff 120deg, #ff6b9d 240deg, #6c63ff 360deg)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient": "gradient 8s ease infinite",
        "blob": "blob 7s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(108,99,255,0.4)",
        "glow-lg": "0 0 40px rgba(108,99,255,0.3)",
        "glow-cyan": "0 0 20px rgba(0,212,255,0.4)",
        "glow-pink": "0 0 20px rgba(255,107,157,0.4)",
      },
    },
  },
  plugins: [],
}
