/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // enable Just-In-Time mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  
  theme: {
    colors: {
      'green': '#84cc16',
      'gray':'#1e293b',
      'black': '#000000',
      'white': '#f8fafc',
      'blue': '#1fb6ff',
      'red': '#dc2626',
    },
    extend: {
      colors: {
        'theme': 'var(--color-theme, black)',
      },
      fontFamily: {
        'marcellus': ['Marcellus', 'serif'], 
        'roboto': ['Roboto', 'sans-serif'],
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'mono': ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        'verdana': ['Verdana', 'sans-serif'],
        'lucida': ['Lucida Sans', 'sans-serif'],
        'impact': ['Impact', 'sans-serif'],
        'franklin': ['Franklin Gothic Medium', 'sans-serif'],
        'arialBlack': ['Arial Black', 'sans-serif'],
        'comic': ['Comic Sans MS', 'sans-serif'],
        'courier': ['Courier New', 'monospace'],
        'lucidaConsole': ['Lucida Console', 'monospace'],
        'fantasy': ['Copperplate', 'fantasy'],
        'cursive': ['Brush Script MT', 'cursive'],
        'merriweather': ['Merriweather', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
        'zcool': ['ZCOOL XiaoWei', 'serif'],
        'bangers': ['Bangers', 'cursive'],
        'cinzel': ['Cinzel', 'serif'],
        'onion-crackers': ['"Onion Crackers"', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      rotate: {
        '270': '270deg',
      },
      spacing: {
        '24': '6rem',
        '[700px]': '700px',
        '1/2': '50%',
        '120':'36rem',
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionTimingFunction: {
        'ease-in': 'cubic-bezier(0.55, 0, 0.1, 1)',
      },
      zIndex: {
        '-3': '-3',
        '50': '50',
      },
      fontSize: {
        '300px': '300px',
        '100px': '100px',
        '80px': '80px',
        '50px': '50px',
      },
    },
  },
  plugins: [],
}
