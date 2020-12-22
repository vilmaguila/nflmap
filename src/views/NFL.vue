<template>
  <div class="about">
    <h1>This page will host a map with NFL stadium locations</h1>
    <national-football-league-map :data="stadium_data" />
  </div>
</template>

<script>
// @ is an alias to /src
import NationalFootballLeagueMap from '@/components/NationalFootballLeagueMap.vue'

export default {
  name: 'NFL',
  components: {
    NationalFootballLeagueMap
  },
  created() {
    this.$store.dispatch('fetch_stadium_data');
  },
  computed: {
    stadium_data() {
      return this.$store.state.nfldata
    }
  }
}
</script>