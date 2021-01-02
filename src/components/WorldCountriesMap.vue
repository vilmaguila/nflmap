<template>
  <div style="height: 600px">
    <l-map style="height: 80%; width: 100%" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" />
      <l-geo-json v-if="data" :geojson="european_data" />
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LGeoJson } from "vue2-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 3,
      center: [47.41322, -1.219482],
    };
  },
  methods: {},
  computed: {
    european_data() {
      return this.data["features"].filter(feature =>{
        return feature.properties.ADMIN === 'Finland'
      })
    }
  },
};
</script>