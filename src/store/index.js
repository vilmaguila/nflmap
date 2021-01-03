import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
      axios.get("https://gist.githubusercontent.com/brianhatchl/59d99872a9cfc0e126211192673991b8/raw/bf706c06ef41f05a35b1bd730639eed54cc7af27/stadiums.json")
        .then(response => {
          commit('SET_POSTS', response.data)
        })
    },
    fetch_countries_data({commit}) {
      axios.get("https://pkgstore.datahub.io/core/geo-countries/countries/archive/23f420f929e0e09c39d916b8aaa166fb/countries.geojson")
        .then(response => {
          commit('SET_COUNTRIES', response.data)
        })
    }
  },
  modules: {
  }
})
