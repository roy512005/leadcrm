/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                caveat: ["'Caveat'", 'cursive'],
                exo: ["'Exo 2'", 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
                sriracha: ['Sriracha', 'cursive'],
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'spin-slow': {
                    '0%': { transform: 'translateX(-50%) rotate(0deg)' },
                    '100%': { transform: 'translateX(-50%) rotate(360deg)' },
                }
            },
            animation: {
                float: 'float 3s ease-in-out infinite',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                'spin-slow': 'spin-slow 12s linear infinite',
            },
        },
    },
    plugins: [],
}
