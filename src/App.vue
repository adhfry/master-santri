<script setup>
import { onMounted } from "vue";
onMounted(() => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    const themeMode = document.documentElement.classList;
    localStorage.setItem("theme", themeMode);
  }
});
</script>

<template>
  <router-view />
</template>
