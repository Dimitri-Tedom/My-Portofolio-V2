/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'Inter':['Inter','sans-serif'],
      },
      dropShadow: {
        'md': '0 4px 3px rgba(0, 0, 0, 0.07)',
        'lg': '0 10px 8px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 13px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 25px rgba(0, 0, 0, 0.15)',
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
         'base': '1rem',
         'lg': '1.125rem',
         'xl': '1.25rem',
         '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
         '5xl': '3rem',
         '6xl': '4rem',
        '7xl': '5rem',
       },
       backdropBlur: {
        'none': '0',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(28,29,32,1) 0%, rgba(25,26,30,1) 38%, rgba(19,20,23,1) 83%)',
      },

    },
    
  },
  plugins: [],
}

