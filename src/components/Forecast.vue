<script setup>

const props = defineProps(["data"]);


</script>

<template>
  <template v-if="!props.data">
    <div class="forecast">
      <div class="forecast__time">
        <p>Thursday</p>
        <p>17.05</p>
      </div>
      <div class="forecast__city">
        <p>Safranbolu, TR</p>
      </div>
      <div class="forecast__temp">
        <p>18°</p>
      </div>
      <div class="forecast__maxes">
        <p><span class="forecast__maxes-max">18° </span>/ <span class="forecast__maxes-min">3°</span></p>
      </div>
      <div class="forecast__description">
        <img class="forecast__description__icon" src="https://cdn-icons-png.flaticon.com/512/4735/4735030.png" alt="">
        <p>Cloudy</p>
      </div>

      <div class="forecast__details">
        <div class="forecast__details__list">
          <ul class="list-titles">
            <li>Humidity</li>
            <li>Wind Direction</li>
            <li>Wind Speed</li>
            <li>POP(Rain%)</li>
          </ul>
          <ul class="list-descriptions">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
    </div>
  </template>

</template>

<style lang="scss" scoped>
.forecast {

  @apply flex flex-col h-full justify-center items-center gap-2 text-white bg-blue-600 font-normal;

  &__time {
    @apply flex flex-col justify-center items-center text-[1.5rem] font-medium;
  }

  &__city {
    @apply text-[2rem] font-medium;
  }

  &__temp {
    @apply text-[5rem] font-medium;
  }

  &__maxes {
    @apply text-[1.3rem];
  }

  &__maxes-max {}

  &__maxes-min {
    @apply opacity-60;
  }

  &__description {
    @apply flex flex-col justify-center items-center;
  }

  &__description__icon {
    @apply w-[100px]
  }

  &__details {
    @apply flex flex-col justify-center items-center gap-4;
  }

  &__details__list {
    @apply flex justify-around w-[80vw];

    .list-titles {
      @apply flex flex-col justify-start;
    }
  }


}
</style>