/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{vue,js}',
    './src/layouts/**/*.{vue,js}',
    './src/pages/**/*.{vue,js}',
    './src/plugins/**/*.{js,ts}',
    './src/nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
      },
    },
  },
  plugins: [],
}

