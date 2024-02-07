// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  telemetry: false,
  app: {
    head: {
      title: 'Derby County API',
      meta: [
        { name: 'description', content: 'An api for getting all derby county upcoming fixtures and match results and stats'},
        { property: 'og:title', content: 'Derby County API' },
        { property: 'og:description', content: 'An api for getting all derby county upcoming fixtures and match results and stats' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.harryredman.com' },
        { property: 'og:locale', content: 'en_gb' },
        { property: 'og:image', content: '/favicon-32x32.png' },
        { name: "msapplication-TileColor", content: "#da532c"},
        { name: "theme-color", content: "#ffffff"}
      ],
      link: [
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes:"32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes:"16x16", href:"/favicon-16x16.png" },
        { rel:"manifest", href:"/site.webmanifest" },
        { rel:"mask-icon", href: "/safari-pinned-tab.svg", color:"#5bbad5" }
      ],
    },
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: 'https://derby-api.azurewebsites.net/' // process.env.API_BASE_URL //'http://localhost:5000'
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ]


})
