import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // @ts-ignore
  namespace: true,
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

export default store
