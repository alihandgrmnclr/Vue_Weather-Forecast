<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="navbar">
      <nav>
        <RouterLink class="link" to="/">Home</RouterLink>
        |
        <RouterLink class="link" to="/search">Search</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.navbar {
  @apply h-[5vh] flex flex-col justify-center items-center;
}

nav {
  @apply flex items-center justify-center gap-4;
}
</style>
