export default {
  head: {
    title: 'Andrey Vinogradov',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content: 'Composer, arranger, hurdy-gurdy player'
      },
      {
        hid: 'description',
        name: 'keywords',
        content: 'Composer, arranger, hurdy gurdy, music'
      }
    ]
  },

  router: {
    base: '/',

    extendRoutes (routes, resolve) {
      routes.push({
        path: '/:lang/:slug?',
        component: resolve(__dirname, 'pages/page.vue')
      })

      routes.push({
        path: '/:slug?',
        component: resolve(__dirname, 'pages/page.vue')
      })
    }
  },

  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const ruFiles = await $content('ru').only(['slug']).fetch()
      const enFiles = await $content('en').only(['slug']).fetch()

      return [
        ...ruFiles.map(file => file.slug === 'index' ? '/' : `/ru/${file.slug}`),
        ...enFiles.map(file => file.slug === 'index' ? '/en/' : `/en/${file.slug}`)
      ]
    }
  },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/api/configuration-css
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  modules: [
    '@nuxt/content',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '65231248',
        webvisor: true
      }
    ],
  ],

  /*
   ** HTTP module configuration
   */
  http: {
    // See https://http.nuxtjs.org/api/#options
  },

  /*
   ** Build configuration
   ** Doc: https://nuxtjs.org/api/configuration-build
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
