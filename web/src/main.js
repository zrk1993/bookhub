import '@vant/touch-emulator'
import Vue from 'vue'
import ePub from 'epubjs'
import VConsole from 'vconsole'
import App from './App.vue'
import router from './router'
import store from './store'
import vantUi from './vant-ui'

import './style/rest.css'
import './style/utils.css'
import './style/flex.scss'

Vue.config.productionTip = false
window.ePub = ePub

Vue.use(vantUi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

var vConsole = new VConsole()
