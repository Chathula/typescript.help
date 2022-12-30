module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      '@fullhuman/postcss-purgecss': {
        content: [
          '../node_modules/pliny/**/*.{js,ts,tsx}',
          './node_modules/pliny/**/*.{js,ts,tsx}',
          './pages/**/*.{js,ts,tsx}',
          './components/**/*.{js,ts,tsx}',
          './layouts/**/*.{js,ts,tsx}',
          './lib/**/*.{js,ts,tsx}',
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
      'postcss-preset-env': {},
    },
  },
}
