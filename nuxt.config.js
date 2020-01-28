const json = require('./json/data.json')

module.exports = {
  mode: 'universal',

  generate: {
    routes: function () {
      return json.map(w => `/speaker/${w.id}`)
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Nodeconf 2020',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Join us for NodeConf Argentina! Our fourth edition will be held at Ciudad Cultural Konex - Buenos Aires, in October 9th & 10th, 2020' },
      { hid: 'og:image', property: 'og:image', content: '/og-image.png'}
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.11.1/tachyons.min.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,700,900'},
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: './assets/scss/main.scss' }
    ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/scroll-to.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
