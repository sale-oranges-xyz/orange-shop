import SystemTypes from './types'

export default {
  state: {
    user: {},
    token: null,
    title: '首页' // vuex
  },
  getters: {
    [SystemTypes.TOKEN]: (state) => {
      if (state.token) {
        return state.token
      }
      const token = localStorage.removeItem('token')
      if (token) {
        state.token = token // 赋值
        return token
      }
      return ''
    },
    [SystemTypes.TITLE]: (state) => {
      return state.title
    }
  },
  mutations: {
    [SystemTypes.LOGIN]: (state, data) => {
      localStorage.setItem('token', data)
      state.token = data
    },
    [SystemTypes.LOGOUT]: (state) => {
      localStorage.removeItem('token')
      state.token = null
    },
    [SystemTypes.TITLE]: (state, data) => {
      state.title = data
    }
  }
  // 看情况写 actions
}
