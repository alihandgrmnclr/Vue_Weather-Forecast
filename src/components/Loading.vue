<template>
  <div class="loading">
    <img class="loading__icon" src="/loading.gif" alt="">
    <p class="loading__text">Yükleniyor...</p>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  @apply absolute flex flex-col text-white justify-center items-center left-0 right-0 ml-auto mr-auto top-[40vh] w-[30vw];

  &__icon{
    @apply w-[150px];
  }
}
</style>