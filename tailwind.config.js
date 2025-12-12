module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pongal: {
          yellow: '#ffd700',
          orange: '#ff8c00',
          black: '#0a0a0a',
          gold: '#ffd700',
        }
      }
    },
  },
  plugins: [],
}
