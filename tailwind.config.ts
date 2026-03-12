import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FFD700",
        secondary: "#5A5840",
        accent: "#3B82F6",
        "python-blue": "#3776AB",
        "python-yellow": "#FFD43B",
        "glass-bg": "rgba(255, 255, 255, 0.03)",
        "glass-border": "rgba(255, 255, 255, 0.06)",
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dark-mesh": "radial-gradient(at 0% 0%, hsla(213,40%,8%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(213,39%,15%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(45,49%,15%,1) 0, transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
