<template>
  <div class="about">
    <h1>World Countries</h1>
    <world-countries-map :data="countries_data" />
  </div>
</template>

<script>
// @ is an alias to /src
import WorldCountriesMap from '@/components/WorldCountriesMap.vue'

export default {
  name: 'WorldCountries',
  components: {
    WorldCountriesMap
  },
  created() {
    this.$store.dispatch('fetch_countries_data');
  },
  computed: {
    countries_data() {
      return this.$store.state.countriesdata
    },
    finland_data() {
      return this.$store.getters.finland
    }
  }
}
</script>