<script setup>
import LanguageToggle from './LanguageToggle.vue';

const props = defineProps(["data"]);


</script>

<template>
  <Transition>
    <div class="forecast">
      
      <LanguageToggle></LanguageToggle>
      <template v-if="props.data">
        <div class="forecast__time">
          <p>week day</p>
          <p>hour of day</p>
        </div>
        <div class="forecast__city">
          <p>{{ props.data.name }}, {{ props.data.sys.country }}</p>
        </div>
        <div class="forecast__temp">
          <p>{{ Math.round(props.data.main.temp) }}°</p>
        </div>
        <div class="forecast__maxes">
          <p><span class="forecast__maxes-max">{{ Math.round(props.data.main.temp_max) }}° </span>/ <span
              class="forecast__maxes-min">{{ Math.round(props.data.main.temp_min) }}°</span></p>
        </div>
        <div class="forecast__description">
          <img class="forecast__description__icon" :src="'icons/' + props.data.weather[0].icon + '.png'" alt="">
          <p>{{ props.data.weather[0].description }}</p>
        </div>

        <div class="forecast__details">
          <div class="forecast__details__list">
            <ul class="list-titles">
              <li>Nem</li>
              <li>Rüzgar Hızı</li>
              <li>Hissedilen Sıcaklık</li>
            </ul>
            <ul class="list-descriptions">
              <li>{{ props.data.main.humidity }}%</li>
              <li>{{ props.data.wind.speed }}</li>
              <li>{{ Math.round(props.data.main.feels_like) }}°</li>
            </ul>
          </div>
        </div>
      </template>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.forecast {

  @apply flex flex-col h-full justify-center items-center gap-2 text-white font-normal;
  background-image: url("https://w7.pngwing.com/pngs/129/100/png-transparent-violet-blue-sky-purple-blue-background-sky-skyline.png");
  background-size: cover;
  background-repeat: no-repeat;

  &__time {
    @apply flex flex-col justify-center items-center text-[1.5rem] font-medium;
  }

  &__city {
    @apply text-[2rem] font-medium;
  }

  &__temp {
    @apply text-[5rem] font-medium ml-5;
  }

  &__maxes {
    @apply text-[1.3rem];
  }

  &__maxes-max {}

  &__maxes-min {
    @apply opacity-60;
  }

  &__description {
    @apply flex flex-col justify-center items-center capitalize;
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


@media (min-width: 1024px) {
  .forecast {

    @apply flex flex-col h-full justify-center items-center gap-2 text-white font-normal;

    &__time {
      @apply flex flex-col justify-center items-center text-[1.5rem] font-medium;
    }

    &__city {
      @apply text-[3rem] font-medium;
    }

    &__temp {
      @apply text-[8rem] font-medium ml-14;
    }

    &__maxes {
      @apply text-[1.5rem];
    }

    &__maxes-max {}

    &__maxes-min {
      @apply opacity-60;
    }

    &__description {
      @apply flex flex-col justify-center items-center text-[2.5rem] capitalize;
    }

    &__description__icon {
      @apply w-[150px]
    }

    &__details {
      @apply flex flex-col justify-center items-center gap-4 text-[1.5rem];
    }

    &__details__list {
      @apply flex justify-around w-[60vw];

      .list-titles {
        @apply flex flex-col justify-start;
      }
    }

  }
}
</style>