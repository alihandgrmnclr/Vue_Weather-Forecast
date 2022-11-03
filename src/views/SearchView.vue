<script setup>
import ButtonComp from '../components/ButtonComp.vue';

const props = defineProps(["city"]);
const apiKey = "8ba8d918b3ff4a298cc397a81fd92bbe";



const getData = async () => {

  if (city.value.length < 2) return;

  const result = await mainHttp.get(`${city.value}&lang=en&days=3&key=${apiKey}`)
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
  <h1>This is search page</h1>
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
</style>
