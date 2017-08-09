import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
import state from './rootState';

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  // 开发环境启用严格模式，正式打包关闭严格模式
  strict: process.env.NODE_ENV !== 'production',
})

export default store;
