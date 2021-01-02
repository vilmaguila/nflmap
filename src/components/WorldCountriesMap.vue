<template>
  <div style="height: 350px">
    <l-map style="height: 80%; width: 100%" :zoom="zoom" :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-geo-json :geojson="data"/>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LGeoJson } from "vue2-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson
  },
  props: {
      data: Object
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 3,
      center: [47.41322, -1.219482],
    };
  },
  methods: {},
};
</script>