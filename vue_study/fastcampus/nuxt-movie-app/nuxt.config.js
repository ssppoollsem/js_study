export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Movie App',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      // <meta http-equiv="X-UA-Compatible" content="IE=edge">
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      // <meta property="og:type" content="website" />
      // <meta property="og:site_name" content="Nuxt Movie App" />
      // <meta property="og:title" content="Nuxt Movie App / Search" />
      // <meta property="og:description" content="The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users." />
      // <meta property="og:image" content="https://heropy.blog/css/images/logo.png" />
      // <meta property="og:url" content="https://heropy-nuxt-movie-app.herokuapp.com" />
      { hid: 'og:type', propery: 'og:type', content: 'website' },
      { hid: 'og:site_name', propery: 'og:site_name', content: 'Nuxt Movie App' },
      { hid: 'og:title', propery: 'og:title', content: 'Nuxt Movie App / Search' },
      { hid: 'og:description', propery: 'og:description', content: 'The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.' },
      { hid: 'og:image', propery: 'og:image', content: 'https://heropy.blog/css/images/logo.png' },
      { hid: 'og:url', propery: 'og:url', content: process.env.CLIENT_URL  },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto:wght@400;700&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],

  styleResources: {
    scss: [
      '~/scss/main.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets: ['@babel/preset-env'],
      plugins: [
        ['@babel/plugin-transform-runtime']
      ]
    },
    postcss: {
      plugins: [
        require('autoprefixer')
      ]
    }
  },

  serverMiddleware: [
    { 
      path: '/api/movie', 
      handler: '~/server-middleware/movie.js' 
    }
  ]
}
