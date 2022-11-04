<script setup>
import { ref } from 'vue';

const toggleLang = ref(false)

const emits = defineEmits(["toggle"])

const toggle = () =>{
  emits()
  toggleLang.value = !toggleLang.value;
}


</script>

<template>
  <div class="toggle">
    <span>English</span>
    <input type="checkbox" @change="toggle">
    <span>Türkçe</span>
  </div>
</template>

<style scoped>
.toggle {}
</style>