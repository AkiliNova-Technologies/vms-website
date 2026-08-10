/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff7fc',
          100: '#dceef9',
          200: '#b3daf1',
          300: '#84c3e7',
          400: '#5aa9da',
          500: '#3e93d1',
          600: '#2e76ac',
          700: '#245d89',
          800: '#1c4a6d',
          900: '#163a56',
        },
        accent: {
          DEFAULT: '#f2a93b',
          light: '#fce9c9',
        },
        ink: '#1e293b',
        muted: '#64748b',
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -12px rgba(30, 95, 148, 0.18)',
        'card': '0 4px 20px -4px rgba(30, 95, 148, 0.12)',
      },
      borderRadius: {
        'xl2': '1.25rem',
      },
    },
  },
  plugins: [],
}