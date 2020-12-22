<template>
  <div class="about">
    <h1>This page will host a map with NFL stadium locations</h1>
    <national-football-league-map />
  </div>
</template>

<script>
// @ is an alias to /src
import NationalFootballLeagueMap from '@/components/NationalFootballLeagueMap.vue'

export default {
  name: 'NFL',
  components: {
    NationalFootballLeagueMap
  }
}
</script>