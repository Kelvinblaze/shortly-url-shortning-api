/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-cyan": "var(--primary-cyan)",
        "primary-dark-violet": "var(--primary-dark-violet)",
        "secondary-red": "var(--secondary-red)",
        "neutral-gray": "var(--neutral-gray)",
        "neutral-grayish-violet": "var(--neutral-grayish-violet)",
        "neutral-very-dark-blue": "var(--neutral-very-dark-blue)",
        "neutral-very-dark-violet": "var(--neutral-very-dark-violet)",
      },
    },
  },
  plugins: [],
};
