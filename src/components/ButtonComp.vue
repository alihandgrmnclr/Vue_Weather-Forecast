<script setup>
const props = defineProps(["text"]);
</script>

<template>
  <div class="btncomp">
    <button>{{ props.text }}</button>
  </div>
</template>

<style scoped>
.btncomp {
  @apply flex justify-center items-center bg-orange-400 w-[60px] p-2 rounded-md;
  @apply hover:bg-orange-500;
}
</style>