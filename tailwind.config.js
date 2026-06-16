/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pearl: {
          DEFAULT: '#FDFCF0', // A soft, warm pearl white
          50: '#FFFFFF',
          100: '#FEFDF8',
          200: '#FCFBF0',
          300: '#F5F3E6',
        },
        emerald: {
          DEFAULT: '#2B5341', // Rusty emerald
          light: '#3C6C57',
          dark: '#1C3A2C',
        },
        gold: {
          DEFAULT: '#E5C07B', // Light gold
          light: '#F2D888',
          dark: '#C7A252',
        },
        dark: {
          DEFAULT: '#111827',
          muted: '#374151',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(43, 83, 65, 0.05)',
        'glow': '0 0 15px rgba(229, 192, 123, 0.3)',
      }
    },
  },
  plugins: [],
}
