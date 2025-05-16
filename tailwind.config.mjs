/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#E44D26',
        'secondary': '#000000',
        'accent': '#F9F9F9',
      },
      fontFamily: {
        'sans': ['Arial', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        'gritty': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 5px rgba(0, 0, 0, 0.2)'
      }
    }
  },
  plugins: [],
}