/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    sm: '640px',
    // => @media (min-width: 640px) { ... }

    md: '760px',
    // => @media (min-width: 760px) { ... }

    lg: '1024px',
    // => @media (min-width: 1024px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }

  },
  plugins: [],
}
