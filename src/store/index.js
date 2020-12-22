import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nfldata: null
  },
  mutations: {
    SET_POSTS(state, nfldata) {
      state.nfldata = nfldata
    }
  },
  actions: {
    fetch_stadium_data({commit}) {
      axios.get("https://gist.githubusercontent.com/brianhatchl/59d99872a9cfc0e126211192673991b8/raw/bf706c06ef41f05a35b1bd730639eed54cc7af27/stadiums.json")
        .then(response => {
          commit('SET_POSTS', response.data)
        })
    }
  },
  modules: {
  }
})
