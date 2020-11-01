import i18n from "./locales/i18n"

export default {
  ssr: true,
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
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",
      },
    ],
  },

  // router: {
  //   mode: "hash",
  // },
  /*
   ** Global CSS
   */
  css: ["~assets/style/main.scss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["@/plugins/gsap.js"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  //buildModules: ["@nuxtjs/style-resources"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources", "nuxt-i18n"],
  styleResources: {
    scss: [
      "normalize-scss",
      "~assets/style/_theme.scss",
      "~assets/style/main.scss",
      "~assets/style/modifiers.scss",
    ],
  },

  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "EN", file: "en.js" },
      { code: "cs", iso: "cs-CZ", name: "CZ", file: "cs.js" },
    ],
    defaultLocale: "en",
    //strategy: "no_prefix",
    vueI18n: i18n,

    //TODO
    // detectBrowserLanguage: {
    //   useCookie: false,
    // },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ["gsap"],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
