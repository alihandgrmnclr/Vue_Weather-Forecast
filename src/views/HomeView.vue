<script setup>
import { ref } from "vue";
import Forecast from "../components/Forecast.vue"

const city = ref("");
const weather = ref(false);
const weatherData = ref(null);


</script>

<template>


  <div class="weather-forecast">
    <template v-if="!weather">
        <Forecast :data="weatherData"></Forecast>
    </template>

  </div>

</template>

<style scoped>
.weather-forecast {
  @apply h-[95vh];
}
</style>
