export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],
  app: {
    head: {
      title: 'Son Karona - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of Son Karona, a Full-Stack Developer Intern' },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
  },
});