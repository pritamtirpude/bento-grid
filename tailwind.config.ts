import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: { min: '324px', max: '678px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: '768px', max: '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: '1024px', max: '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1280px', max: '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { min: '1536px' }
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      base: [
        '18px',
        {
          lineHeight: '111%',
          letterSpacing: '0px'
        }
      ],
      lg: [
        '32px',
        {
          lineHeight: '87.5%',
          letterSpacing: '-2px'
        }
      ],
      xl: [
        '40px',
        {
          lineHeight: '90%',
          letterSpacing: '-2px'
        }
      ],
      '2xl': [
        '62px',
        {
          lineHeight: '93.5%',
          letterSpacing: '-3px'
        }
      ]
    },
    extend: {
      colors: {
        bento: {
          purple100: 'hsl(254, 88%, 90%)',
          purple500: 'hsl(256, 67%, 59%)',
          yellow100: 'hsl(31,66%,93%)',
          yellow500: 'hsl(39,100%,71%)',
          whitebento: 'hsl(0, 0%, 100%)',
          blackbento: 'hsl(0, 0%, 7%)'
        }
      }
    }
  },
  plugins: []
};
export default config;
