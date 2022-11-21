import Vue from 'vue'
import Vuex from 'vuex'
import { userModule } from './account'

Vue.use(Vuex)

const store = new Vuex.Store({
  // @ts-ignore
  namespaced: true,
  modules: {
    user: userModule,
  },
  state: {
    drawer: true,
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer
    },
  },
  actions: {
    TOGGLE_DRAWER({ commit }) {
      commit('toggleDrawer')
    },
  },
  getters: {
    DRAWER_STATE(state) {
      return state.drawer
    },
  },
})

store.subscribe(({ type, payload }) => {})

export default store
