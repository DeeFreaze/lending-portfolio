import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        text: 'Home',
        href: '#!',
      },
      {
        text: 'About',
        href: '#about',
      },
      {
        text: 'Contacts',
        href: '#contacts',
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    links: (state) => {
      return state.items
    },
  },
  modules: {
  }
})
