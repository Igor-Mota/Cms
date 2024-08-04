export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir:'src',
  css:['@/assets/css/tailwind.css'],
  modules:[
    '@nuxtjs/i18n'
  ],
  i18n:{
    locales:[
      { code: 'pt', name: 'Português', iso: 'pt-BR', file: 'pt.json' }
    ],
    defaultLocale: 'pt',
    lazy:true,
    langDir:'locales'
  },
})
