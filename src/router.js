import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from '@/views/login.vue'

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
export default router
