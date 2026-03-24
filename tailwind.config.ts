import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#001f11',
        card: '#10472e',
        text: '#FAFAF2',
        accent: '#E6B836',
        'accent-soft': '#f2db94',
      },
      fontFamily: {
        arabic: ['Amiri', 'serif'],
        serif: ['Cinzel', 'serif'],
        script: ['Great Vibes', 'cursive'],
        body: ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
