import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixins'
import i18nPlugin from './plugins/i18n' //  i18n 플러그인 추가

import './assets/css/bootstrap-grid.min.css'
import './assets/css/bootstrap-utilities.min.css'

const i18nStrings = {
  en: {
    hi: 'Hello!'
  },
  ko: {
    hi: '안녕하세요!'
  }
}

const app = createApp(App)
app.use(store)
app.use(router)
app.use(i18nPlugin, i18nStrings) // i18n 플러그인에 다국어 번역 데이터를 파라미터로 전달
app.mixin(mixin)
app.mount('#app')

window.Kakao.init('d8bb26c0f48cd3d3133c47338c290266')
window.Kakao.isInitialized()
