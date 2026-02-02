/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./skin.html", "./script.js"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['"D2Coding"', '"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        // Custom refined palette if needed
        brand: {
             50: '#f0f9ff',
            100: '#e0f2fe',
            500: '#0ea5e9', // Sky 500
            600: '#0284c7',
            900: '#0c4a6e',
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.700'),
            a: {
              color: theme('colors.brand.600'),
              '&:hover': {
                color: theme('colors.brand.500'),
              },
            },
            code: {
                color: theme('colors.pink.500'),
                backgroundColor: theme('colors.slate.100'),
                borderRadius: '0.25rem',
                paddingLeft: '0.25rem',
                paddingRight: '0.25rem',
                paddingTop: '0.1rem',
                paddingBottom: '0.1rem',
                fontWeight: '600',
            }
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.300'),
            a: {
              color: theme('colors.brand.400'),
              '&:hover': {
                color: theme('colors.brand.300'),
              },
            },
            h1: { color: theme('colors.slate.100') },
            h2: { color: theme('colors.slate.100') },
            h3: { color: theme('colors.slate.100') },
            h4: { color: theme('colors.slate.100') },
            strong: { color: theme('colors.slate.100') },
             code: {
                color: theme('colors.pink.400'),
                backgroundColor: theme('colors.gray.800'),
            }
          },
        },
      }),
    },
  },
  plugins: [],
}
