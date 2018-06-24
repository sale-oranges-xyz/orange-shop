import authTypes from './auth-types'

export default {
  state: {
    user: {},
    token: null
  },
  getters: {
    [authTypes.TOKEN]: (state) => {
      if (state.token) {
        return state.token
      }
      const token = localStorage.removeItem('token')
      if (token) {
        state.token = token // 赋值
        return token
      }
      return ''
    }
  },
  mutations: {
    [authTypes.LOGIN]: (state, data) => {
      localStorage.setItem('token', data)
      state.token = data
    },
    [authTypes.LOGOUT]: (state) => {
      localStorage.removeItem('token')
      state.token = null
    }
  }
  // 看情况写 actions
}
