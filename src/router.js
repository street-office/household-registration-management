import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from '@/views/login.vue'
import AddSurvey from '@/views/survey/add.vue'
import ManageSurvey from '@/views/survey/manage.vue'

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/addSurvey',
      name: 'AddSurvey ',
      component: AddSurvey
    },
    {
      path: '/manageSurvey',
      name: 'ManageSurvey',
      component: ManageSurvey
    },
  ]
})
export default router
