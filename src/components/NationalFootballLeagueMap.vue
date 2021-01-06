<template>
  <div style="height: 350px">
    <l-map
      style="height: 80%; width: 100%"
      :zoom="zoom"
      :options="{ zoomControl: false }"
      :center="center"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-control>
        <toggler-control />
      </l-control>
      <l-geo-json
        v-for="(item, index) in data_conf"
        :key="index"
        :geojson="data"
        :visible="item.visible"
        :options="options_method(item.conference)"
      />
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LGeoJson, LControl } from "vue2-leaflet";
import init_data from "../common/init_nfl.js";

export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LControl,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 3,
      center: [47.41322, -1.219482],
      data_conf: init_data,
    };
  },
  methods: {
    options_method(condition) {
      return {
        onEachFeature: this.onEachFeatureFunction,
        filter: this.filterFunction(condition),
      };
    },
    filterFunction(condition) {
      return (feature) => {
        return feature.properties.Conference === condition;
      };
    },
  },
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction,
        filter: this.filterFunction,
      };
    },
    onEachFeatureFunction() {
      return (feature, layer) => {
        layer.bindTooltip(
          "<div>code:" +
            feature.properties.Conference +
            "</div><div>nom: " +
            feature.properties.Team +
            "</div>",
          { permanent: false, sticky: true }
        );
      };
    },
  },
};
</script>