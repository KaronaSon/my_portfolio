module.exports = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            animation: {
                bounceOnce: 'bounce 1s ease-in-out', // custom single bounce
            },
        },
    },
    plugins: [],
};