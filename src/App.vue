<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="navbar">
      <nav>
        <RouterLink class="link" to="/">Ana Sayfa</RouterLink>
        |
        <RouterLink class="link" to="/search">Arama</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.navbar {
  @apply h-[5vh] min-h-[30px] flex flex-col justify-center items-center;
}

nav {
  @apply flex items-center justify-center gap-4 text-lg font-medium;
}
</style>
