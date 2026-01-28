/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9E3FFD',   // Vibrant Purple
        secondary: '#16163F', // Dark Navy
        light: '#F4F7FB',     // Very Light Grey-Blue
      },
      fontFamily: {
        // Exact names requested by user
        'worksans': ['"worksans-semibold"', '"work sans"', 'sans-serif'],
        'avenir-light': ['"avenir-lt-w01_35-light1475496"', 'sans-serif'],
        'avenir-heavy': ['"avenir-lt-w01_85-heavy1475544"', 'sans-serif'],
        // Mapping default sans to the primary font
        sans: ['"worksans-semibold"', '"work sans"', 'sans-serif'],
      },
      fontSize: {
        // Navbar
        'nav-link': ['18px', { lineHeight: '49px' }],
        'nav-logo': ['26px', { fontWeight: '600' }],

        // Hero
        'hero-h1': ['65px', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-sub': ['24px', { lineHeight: '1.6' }],
        'hero-btn': ['18px', { lineHeight: '1' }],

        // Services
        'services-title': ['36px', { lineHeight: '1.3', fontWeight: '600' }],
        'card-title': ['16px', { fontWeight: '700' }], // Heavy
        'card-desc': ['18px', { lineHeight: '1.5' }],

        // Stats
        'stat-num': ['50px', { fontWeight: '600' }],
        'stat-label': ['16px', { letterSpacing: '1.6px' }],

        // General Section Headers
        'section-h2': ['36px', { fontWeight: '600', lineHeight: '1.2' }],
        'section-p': ['18px', { lineHeight: '30px' }],

        // Testimonials
        'quote': ['25px', { lineHeight: '1.4' }],
        'author-name': ['18px', { fontWeight: '600' }],
        'author-role': ['14px', {}],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right bottom, #F8F9FF, #F1F4FF)',
      },
    },
  },
  plugins: [],
}
