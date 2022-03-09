module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    theme: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        '3xl': '1734px',
        // => @media (min-width: 1734px) { ... }

        '4xl': '2458px',
        // => @media (min-width: 2458px) { ... }
      }
    },
    extend: {
      screens: {
        'smm': '375px',
        '3xl': '1734px',
        '14inc': '1344px',
        '15inc': '1440px',
        '16inc': '1536px',
        '17inc': '1632px',
        '18inc': '1728px',
        '19inc': '1824px',
        '20inc': '1920px',
        '21inc': '2016px',
        '22inc': '2112px',
        '23inc': '2208px',
        '24inc': '2304px',
        '25inc': '2400px',
        '26inc': '2496px',
        '27inc': '2592px',
        '28inc': '2688px',
        '29inc': '2784px',
        '30inc': '2880px',
        '31inc': '2976px',
        '32inc': '3072px',
      }
    },
  },
  plugins: [],
}