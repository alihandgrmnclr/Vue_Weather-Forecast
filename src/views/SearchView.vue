<script setup>
import { ref } from "vue";
import { mainHttp, apiKey } from "../service/HttpService"
import ButtonComp from '../components/ButtonComp.vue';
import Forecast from "../components/Forecast.vue";
import AlertComp from '../components/AlertComp.vue';

const city = ref("");
const weatherData = ref(null);
const showAlert = ref(false);

const getData = async () => {

  if (city.value.length <= 2) return showAlert.value = true, city.value = "";


  const result = await mainHttp.get(`weather?q=${city.value}&appid=${apiKey}&units=metric&lang=tr`)
    .then(res => weatherData.value = res.data)
    .catch(err => showAlert.value = true)
  city.value = "";
  return result;
}

const acceptAlertHandler = () => {
  showAlert.value = false
};

</script>

<template>
  <Teleport to="#app">
    <template v-if="showAlert">
      <AlertComp :text="'Lütfen geçerli bir şehir giriniz!'" @acceptAlert="acceptAlertHandler"></AlertComp>
    </template>
  </Teleport>
  <main>
    <div class="input">
      <input class="input__text" @input="autoComplete" v-model="city" type="text">
    </div>
    <ButtonComp :text="'Ara'" @click="getData"></ButtonComp>
  </main>
  <template v-if="weatherData">
    <Forecast class="search-forecast" :data="weatherData"></Forecast>
  </template>
</template>

<style lang="scss" scoped>
main {
  @apply flex flex-col h-[15vh] min-h-[100px] justify-center items-center;

  .input {
    @apply flex justify-center items-center h-[50px];

    &__text {
      @apply border rounded-md;
    }
  }
}

.search-forecast {
  @apply h-[80vh];
}
</style>
