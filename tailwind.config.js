/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        univalle: {
          red: '#B30000',
          'red-dark': '#8C0000',
          'red-deep': '#7A0000',
          'red-50': '#FFF5F5',
          'red-100': '#FCE4E4',
          'red-200': '#F7BFBF',
          'red-700': '#7A0000',
          ink: '#101218',
          'ink-soft': '#3A3F4B',
          muted: '#5C6473',
          subtle: '#8B92A0',
          surface: '#F7F5F2',
          'surface-2': '#F1EEEA',
          line: '#E7E3DE',
          'line-strong': '#D6D1CA',
          cream: '#FBF8F4',
          gold: '#D4A859',
          'gold-soft': '#F5E9CC',
        },
        state: {
          'success-bg': '#E6F4EC',
          'success-text': '#0E5A2C',
          'success-strong': '#0A4422',
          'warn-bg': '#FFF4E0',
          'warn-text': '#7A4A00',
          'danger-bg': '#FDECEC',
          'danger-text': '#8C0000',
          'info-bg': '#E8F0FB',
          'info-text': '#10417A',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,17,21,0.04), 0 6px 18px rgba(15,17,21,0.06)',
        'card-hover': '0 4px 12px rgba(15,17,21,0.06), 0 12px 32px rgba(15,17,21,0.10)',
        soft: '0 1px 3px rgba(15,17,21,0.04)',
        pop: '0 20px 50px -20px rgba(179,0,0,0.35)',
        ring: '0 0 0 1px rgba(231,227,222,1)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.125rem',
        '3xl': '1.5rem',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        'grid-soft':
          "linear-gradient(transparent 23px, rgba(15,17,21,0.04) 24px), linear-gradient(90deg, transparent 23px, rgba(15,17,21,0.04) 24px)",
      },
      backgroundSize: {
        'grid-soft': '24px 24px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(6px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(14px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pop-in': {
          '0%': { opacity: 0, transform: 'scale(0.96)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out both',
        'slide-up': 'slide-up 0.45s cubic-bezier(0.16,1,0.3,1) both',
        'pop-in': 'pop-in 0.35s cubic-bezier(0.16,1,0.3,1) both',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
