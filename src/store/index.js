import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default {
  state: {
    count: 0
  },
  mutations: {
    addCount (state) {
      state.count++
    }
  }
}
