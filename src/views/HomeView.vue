<script setup>
import { onBeforeMount, ref } from "vue";
import { locationHttp, apiKey } from "../service/HttpService"
import Forecast from "../components/Forecast.vue"
import AlertComp from '../components/AlertComp.vue';

const lat = ref("");
const lon = ref("");
const lang = ref("tr"); // en
const weatherData = ref(null);
const showAlert = ref(false);

onBeforeMount(() => {
  getLocation();
})

const getLocation = () => {

  const success = (position) => {
    lat.value = position.coords.latitude;
    lon.value = position.coords.longitude;
    getData(lat.value, lon.value)
  };

  const error = () => {
    showAlert.value = true;
  };

  navigator.geolocation.getCurrentPosition(success, error);
};


const getData = async (latitude, longtitude) => {

  const result = await locationHttp.get(`weather?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric&lang=${lang.value}`)
    .then(res => weatherData.value = res.data);

  return result;
};

const acceptAlertHandler = () => {
  showAlert.value = false;
};

</script>

<template>
  <Teleport to="#app">
    <template v-if="showAlert">
      <AlertComp
        :text="'Konumunuza erişim sağlanamadı! Konum ayarınızı kontrol edininiz.'"
        @acceptAlert="acceptAlertHandler"></AlertComp>
    </template>
  </Teleport>
  <div class="weather-forecast">
    <Forecast :data="weatherData"></Forecast>
  </div>
</template>

<style scoped>
.weather-forecast {
  @apply h-[95vh];
}
</style>
