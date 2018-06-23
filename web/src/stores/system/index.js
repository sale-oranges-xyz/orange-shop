import Vuex from 'vuex'
import Vue from 'vue'
import authTypes from './auth-types'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: {},
    token: null
  },
  mutations: {
    [authTypes.LOGIN]: (state, data) => {
      localStorage.token = data
      state.token = data
    },
    [authTypes.LOGOUT]: (state) => {
      localStorage.removeItem('token')
      state.token = null
    }
  }
  // 看情况写 actions
})
