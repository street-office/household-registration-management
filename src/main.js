// import Vue from 'vue'
let Vue = window.Vue
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.styl'
import '@/assets/css/happycss.css'
// import ElementUI from 'element-ui'
let ElementUI = window.ELEMENT
import Axios from '@/assets/js/axios'
require('es6-promise').polyfill()
import '@/assets/css/element-ui.css'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = Axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
