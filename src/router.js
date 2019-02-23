import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from '@/views/login.vue'
import AddSurvey from '@/views/survey/add.vue'
import ManageSurvey from '@/views/survey/manage.vue'

import AddCase from '@/views/case/add.vue'
import ManageCase from '@/views/case/manage.vue'
import StatisCase from '@/views/case/statis.vue'

import Search from '@/views/data/search.vue'

import AddAnnouncement from '@/views/announcement/add.vue'
import Approval from '@/views/announcement/approval.vue'
import Edit from '@/views/announcement/edit.vue'
import SearchAddAnnouncement from '@/views/announcement/search.vue'

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
    {
      path: '/addCase',
      name: 'AddCase',
      component: AddCase
    },
    {
      path: '/manageCase',
      name: 'ManageCase',
      component: ManageCase
    },
    {
      path: '/statisCase',
      name: 'StatisCase',
      component: StatisCase
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/addAnnouncement',
      name: 'AddAnnouncement',
      component: AddAnnouncement
    },
    {
      path: '/approval',
      name: 'Approval',
      component: Approval
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/searchAddAnnouncement',
      name: 'SearchAddAnnouncement',
      component: SearchAddAnnouncement
    },
  ]
})
export default router
