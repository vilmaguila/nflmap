import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nfldata: null,
    countriesdata: null,
  },
  getters: {
    finland: state => {
      return state.countriesdata['features'].filter(feature => {
        return feature.properties.ADMIN === 'Finland'
      })
    }
  },
  mutations: {
    SET_POSTS(state, nfldata) {
      state.nfldata = nfldata
    },
    SET_COUNTRIES(state, countriesdata) {
      state.countriesdata = countriesdata
    }
  },
  actions: {
    fetch_stadium_data({commit}) {
      api.third_party.get_nfl_stadiums()
        .then(response => {
          commit('SET_POSTS', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetch_countries_data({commit}) {
      api.third_party.get_world_countries()
        .then(response => {
          commit('SET_COUNTRIES', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
