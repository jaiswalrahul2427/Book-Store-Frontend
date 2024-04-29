/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        'node_modules/preline/dist/*.js',
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            darkMode: 'class',
            fontFamily: {
                Fredoka: ["Fredoka", 'sans-serif'] // Adds a new `font-display` class
            },
        },
    },
    plugins: [require("daisyui"),
        require('preline/plugin'),
        require('flowbite/plugin')
    ],

}