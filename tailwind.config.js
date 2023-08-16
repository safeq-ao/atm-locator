/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Roboto', 'Helvetica', 'sans-serif']
        },
        extend: {
            colors: {
                grey: '#cac4d0',
                black900: '#0a0a0a'
            },
            screens: {
                '2xl': '1440px',
                '3xl': '1920px'
            }
        }
    },
    plugins: []
}
