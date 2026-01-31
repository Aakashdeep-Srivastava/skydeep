/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      rotate: {
        "-180": "-180deg",
        "-90": "-90deg",
        "-45": "-45deg",
        "0": "0",
        "45": "45deg",
        "90": "90deg",
        "135": "135deg",
        "180": "180deg",
        "270": "270deg",
      },
      fontFamily: {
        Header: ["Lato", "sans-serif"],
        Text2: ["Lato", "sans-serif"],
        About: ["Playfair Display", "serif"],
        Arimo: ["Arimo", "sans-serif"],
      },
      colors: {
        // Dark mode colors (original)
        AAprimary: "var(--color-primary)",
        AAsecondary: "var(--color-secondary)",
        AAError: "var(--color-error)",
        AAtertiary: "var(--color-tertiary)",
        ResumeButtonHover: "var(--color-resume-hover)",
        MobileNavBarColor: "var(--color-mobile-nav)",
        MobileNavColor: "var(--color-mobile-nav-overlay)",
        StartupBackground: "var(--color-startup-bg)",

        // Text colors
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",

        // Surface colors
        "surface": "var(--color-surface)",
        "surface-elevated": "var(--color-surface-elevated)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
      boxShadow: {
        'theme': 'var(--shadow-default)',
        'theme-lg': 'var(--shadow-lg)',
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwind-scrollbar-hide"),
  ],
};
