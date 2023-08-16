/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Roboto', 'Helvetica', 'sans-serif']
        },
        extend: {
            screens: {
                '2xl': '1440px',
                '3xl': '1920px'
            }
        }
    },
    plugins: []
}
