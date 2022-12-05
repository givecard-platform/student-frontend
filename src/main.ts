import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

//translations
//https://betterprogramming.pub/vue-i18n-ultimate-guide-fb3d9db48c94
// import { createI18n } from 'vue-i18n'
// import I18n from './i18n.js' //*causes page to not load* 
//i18n.js supposed to be generated with npm install vue-i18n but it didn't
//the one that exists now was manually made and the file contents were copied pasted from website

// const i18n = createI18n({
//     locale:
//       localStorage.getItem('lang') ||
//       // Detect user's browser language
//       I18n.detectLanguage() ||
//       process.env.VUE_APP_I18N_LOCALE,
//     fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
//     // Load selected lang's .json file
//     messages: I18n.loadLocaleMessages()
//   })

const app = createApp(App)

app.use(router)
// app.use(i18n)

app.mount('#app')

//I'm getting "-bash: vue-translation-manager: command not found" when I try to run 
//vue-translation-manager translate