/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        colors: {
            black: '#000',
            white: '#fff',
            primary: {
                main: '#00BC93',
                0: '#e5fffb',
                100: '#d0fff5',
                200: '#a0fee9',
                300: '#6dfedd',
                400: '#4afed4',
                500: '#38fece',
                600: '#2cfeca',
                700: '#1de2b2',
                800: '#00c99e',
                900: '#00ae87',
            },
        },
        fontFamily: {
            hindSiliguri: ['Hind Siliguri', 'sans-serif'],
            ubuntu: ['Ubuntu', 'sans-serif'],
            urbanist: ['Urbanist', 'sans-serif'],
        },
        extend: {
            spacing: {
                128: '32rem',
                144: '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    plugins: [],
};
