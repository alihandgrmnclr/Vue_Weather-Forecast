<script setup>
import { ref } from "vue";
import { mainHttp, apiKey } from "../service/HttpService"
import ButtonComp from '../components/ButtonComp.vue';
import Forecast from "../components/Forecast.vue";

const city = ref("");
const weatherData = ref(null);
const weather = ref(false);

const getData = async () => {

  if (city.value.length < 2) return;

  const result = await mainHttp.get(`weather?q=${city.value}&appid=${apiKey}&units=metric`)
    .then(res => weatherData.value = res.data);

  console.log(weatherData.value);
  weather.value = true;
  return result;
}

const addFav = () => {
  setFavourites(city.value)
};

const getFav = () => {
  return getFavourites();
}


</script>

<template>
  <main>
    <div class="input">
      <input class="text-input" v-model="city" type="text">
    </div>
    <ButtonComp @click="getData"></ButtonComp>
  </main>
  <template v-if="weatherData">
    <Forecast class="search-forecast" :data="weatherData"></Forecast>
  </template>
</template>

<style scoped>
main {
  @apply flex flex-col h-[15vh] justify-center items-center;
}

.input {
  @apply flex justify-center items-center h-[50px];
}

.text-input {
  @apply border rounded-md;
}

.search-forecast{
  @apply h-[80vh];
}

</style>
