import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/assets/css/reset.styl'
import '@/assets/css/happycss.css'
import ElementUI from 'element-ui'
import Axios from '@/assets/js/axios'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = Axios

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
