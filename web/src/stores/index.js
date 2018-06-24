/**
 * 聚合所有sotre
 */
import Vuex from 'vuex'
import Vue from 'vue'
// stores
import systemStore from './system'
// 工具类
import ObjectUtil from '@/utils/objectUtil'

Vue.use(Vuex)
// 以后多个的话，可以使用Object.assign 拷贝数据
let state = systemStore.state
let mutations = systemStore.mutations
// actions 需要特别处理，不一定需要
let actions = ObjectUtil.isUndefined(systemStore.actions) ? {} : systemStore.actions
let getters = systemStore.getters

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
