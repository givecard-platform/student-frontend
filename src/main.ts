import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import { createI18n } from 'vue-i18n'
// import I18n from './i18n.js' //causes page to not load 
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

//another version I tried making that doesn't depend on the i18n.js file
// const i18n = createI18n({
//         legacy: false,
//         locale:
//         localStorage.getItem("lang") ||
//         process.env.VUE_APP_I18N_LOCALE,
//       fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "ko",
//         // Load selected lang's .json file
//         messages: {
//             en: { },
//             ja: { },
//           }
//       })

const app = createApp(App)

app.use(router)
// app.use(i18n)

app.mount('#app')

//I'm getting "-bash: vue-translation-manager: command not found" when I try to run 
//vue-translation-manager translate (step )