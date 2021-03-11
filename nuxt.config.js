require('dotenv').config()
export default {
  env: {
    API_URL: process.env.API_URL,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Profaili',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  loading: { color: '#92E3A9', height: '5px' },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~plugins/vuejs-modal.js', '~plugins/repository.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components',
    { path: '~/components/unauthenticated/form', prefix: '' },
    { path: '~/components/unauthenticated', prefix: '' },
    { path: '~/components/dashboard', prefix: '' },
    { path: '~/components/', prefix: '' },
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_URL || 'https://profaili-api.herokuapp.com/api/v1',
  },

  router: {
    middleware: ['auth'],
  },

  auth: {
    redirect: {
      login: '/login',
      // logout: "/logout",
      home: '/dashboard',
    },
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
          maxAge: 5,
        },
        refreshToken: {
          property: 'token',
          data: 'token',
          maxAge: 60 * 60 * 24 * 30,
          tokenRequired: true,
        },
        endpoints: {
          login: { url: 'auth/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/user', method: 'get' },
          refresh: { url: 'auth/refresh', method: 'post' },
        },

        user: {
          property: 'user',
          autoFetch: true,
        },
        autoLogout: false,
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
