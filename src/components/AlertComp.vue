<script setup>
import ButtonComp from './ButtonComp.vue';

const props = defineProps(["text"])
const emits = defineEmits(["acceptAlert"])

const closeAlert = () => {
  emits("acceptAlert");
}

</script>

<template>
  <div class="alert">
    <div class="alertmodal">
      <div class="alertmodal__icon">
        <img src="icons/alert.png" alt="">
      </div>
      <div class="alertmodal__title">
        <p>Hata!</p>
      </div>
      <div class="alertmodal__text">
        <p>{{ props.text }}</p>
      </div>
      <div class="alertmodal__button">
        <ButtonComp :text="'Onayla'" @click="closeAlert"></ButtonComp>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.alert {
  @apply absolute top-0 right-0 left-0 ml-auto mr-auto w-full h-full;
  background-color: rgba(0, 0, 0, 0.42);
}

.alertmodal {
  @apply absolute flex flex-col items-center justify-center top-[40vh] right-0 left-0 ml-auto mr-auto w-[300px] h-[250px] bg-white rounded-md;

  &__title {
    @apply text-3xl;
  }

  &__text {
    @apply flex flex-col justify-center items-center w-[270px] h-[75px] mt-auto text-lg;
  }

  &__icon {
    @apply w-14 mt-auto;
  }

  &__button {
    @apply mt-auto mb-4;
  }
}
</style>