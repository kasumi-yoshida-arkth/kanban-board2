import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    output: 'Hello'
  },
  mutations: {
    setOutput (state, output) {
      state.output = output
    }
  }
})