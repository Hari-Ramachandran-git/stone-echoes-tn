import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      colors: {
        border: "hsl(var(--border))",
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
        // Tamil Nadu heritage colors
        bronze: {
          DEFAULT: "hsl(30 44% 29%)",
          light: "hsl(30 40% 40%)",
          dark: "hsl(30 50% 20%)",
        },
        gold: {
          DEFAULT: "hsl(42 100% 45%)",
          light: "hsl(42 100% 55%)",
          dark: "hsl(42 100% 35%)",
        },
        coral: {
          DEFAULT: "hsla(356, 82%, 47%, 1.00)",
          light: "hsla(356, 79%, 45%, 1.00)",
          dark: "hsla(356, 76%, 29%, 1.00)",
        },
        stone: {
          DEFAULT: "hsl(0 0% 37%)",
          light: "hsl(0 0% 50%)",
          dark: "hsl(0 0% 25%)",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heritage: ['Crimson Text', 'Georgia', 'serif'],
        culture: ['Inter', 'Nunito Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-sunrise': 'var(--gradient-sunrise)',
        'gradient-temple': 'var(--gradient-temple)',
        'gradient-stone': 'var(--gradient-stone)',
      },
      boxShadow: {
        'temple': 'var(--shadow-temple)',
        'stone': 'var(--shadow-stone)',
        'glow': 'var(--shadow-glow)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(1deg)' },
          '50%': { transform: 'translateY(-5px) rotate(-1deg)' },
          '75%': { transform: 'translateY(-15px) rotate(0.5deg)' },
        },
        sunrise: {
          '0%': { transform: 'translateY(100%) scale(0.8)', opacity: '0' },
          '50%': { transform: 'translateY(50%) scale(0.9)', opacity: '0.5' },
          '100%': { transform: 'translateY(0%) scale(1)', opacity: '1' },
        },
        'gopuram-rise': {
          '0%': { transform: 'translateY(20px) scale(0.95)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        sunrise: "sunrise 2s ease-out forwards",
        'gopuram-rise': "gopuram-rise 1.5s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
