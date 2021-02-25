require("dotenv").config();
export default {
  env: {
    API_URL: process.env.API_URL
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    // title: process.env.npm_package_name || 'Profaili',
    title: "Profaili",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */
  css: [],

  loading: { color: "#92E3A9", height: "5px" },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["~plugins/vuejs-modal.js", "~plugins/repository.js"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next"
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_URL || "https://profaili-api.herokuapp.com/api/v1"
  },

  router: {
    middleware: ["auth"]
  },

  auth: {
    redirect: {
      login: "/login",
      // logout: "/logout",
      home: "/dashboard"
    },
    strategies: {
      local: {
        scheme: "refresh",
        token: {
          property: "token",
          required: true,
          type: "Bearer",
          maxAge: 5
        },
        refreshToken: {
          property: "token",
          data: "token",
          maxAge: 60 * 60 * 24 * 30,
          tokenRequired: true
        },
        endpoints: {
          login: { url: "auth/login", method: "post" },
          logout: { url: "/auth/logout", method: "post" },
          user: { url: "/user", method: "get" },
          refresh: { url: "auth/refresh", method: "post" }
        },

        user: {
          property: "user",
          autoFetch: true
        },
        autoLogout: false
      }
    }
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
