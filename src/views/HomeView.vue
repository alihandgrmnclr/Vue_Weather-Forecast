<script setup>
import { onMounted, ref } from "vue";
import { locationHttp, apiKey } from "../service/HttpService"
import Forecast from "../components/Forecast.vue"

const lat = ref("");
const lon = ref("");
const weather = ref(false);
const weatherData = ref(null);

onMounted(async () => {
  await getLocation();
});


const getLocation = async () => {

  const success = (position) => {
    lat.value = position.coords.latitude;
    lon.value = position.coords.longitude;
  };

  const error = () => {
    alert("Unable to connect to your location");
  };

  navigator.geolocation.getCurrentPosition(success, error);
};

const getData = async (latitude, longtitude) => {

  // const result = await locationHttp.get(`daily?lat=${latitude}&lon=${longtitude}&key=${apiKey}`)
  //   .then(res => weatherData.value = res.data);
  const result = await locationHttp.get(`weather?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`)
    .then(res => weatherData.value = res.data);

  console.log(weatherData.value);
  weather.value = true;
  return result;
};


</script>

<template>
  <button @click="getData(lat, lon)" class="bg-gray-300">bas</button>

  <div class="weather-forecast">
    <Forecast :data="weatherData"></Forecast>
  </div>

</template>

<style scoped>
.weather-forecast {
  @apply h-[95vh];
}
</style>
