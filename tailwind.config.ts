import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        void: "#05060b",
        ion: "#63f2ff",
        solar: "#ffd36b",
        plasma: "#ff6ba8",
      },
      boxShadow: {
        aura: "0 0 48px rgba(99, 242, 255, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
