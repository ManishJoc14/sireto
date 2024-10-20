import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        border: "hsl(var(--border))",
        brandPrimary: "#E11D3A",
        brandAccent: "#F7941D",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "primary-shadow": "4px 4px 0 0 #64ffda",
      },
      keyframes: {
        hamburgerOpenTop: {
          "0%": { top: "0", transform: "rotate(0)", width: "100%" },
          "100%": {
            top: "0.5rem",
            transform: "rotate(315deg)",
            width: "100%",
          },
        },
        hamburgerCloseTop: {
          "100%": { top: "0", transform: "rotate(0)", width: "100%" },
          "0%": {
            top: "0.5rem",
            transform: "rotate(315deg)",
            width: "100%",
          },
        },
        hamburgerOpenMiddle: {
          "0%": { transform: "scaleX(1)", opacity: "1" },
          "100%": { transform: "scaleX(0)", opacity: "0" },
        },
        hamburgerCloseMiddle: {
          "100%": { transform: "scaleX(1)", opacity: "1" },
          "0%": { transform: "scaleX(0)", opacity: "0" },
        },
        hamburgerOpenBottom: {
          "0%": { top: "1rem", transform: "rotate(0)", width: "76%" },
          "100%": {
            top: "0.5rem",
            transform: "rotate(405deg)",
            width: "100%",
          },
        },
        hamburgerCloseBottom: {
          "100%": { top: "1rem", transform: "rotate(0)", width: "76%" },
          "0%": {
            top: "0.5rem",
            transform: "rotate(405deg)",
            width: "100%",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        hamburgerOpenTop: "hamburgerOpenTop 0.3s forwards",
        hamburgerOpenMiddle: "hamburgerOpenMiddle 0.3s forwards",
        hamburgerOpenBottom: "hamburgerOpenBottom 0.3s forwards",
        hamburgerCloseTop: "hamburgerCloseTop 0.3s forwards",
        hamburgerCloseMiddle: "hamburgerCloseMiddle 0.3s forwards",
        hamburgerCloseBottom: "hamburgerCloseBottom 0.3s forwards",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
