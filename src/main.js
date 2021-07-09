import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixins'

createApp(App).use(store).use(router).mixin(mixin).mount('#app')
