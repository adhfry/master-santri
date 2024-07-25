<script setup>
import { onMounted } from "vue";
import { useHead } from "unhead";
onMounted(() => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    const themeMode = document.documentElement.classList;
    localStorage.setItem("theme", themeMode);
  }
});

useHead({
  title: "Welcome",
  titleTemplate: "%s - Santri Master",
  meta: [
    {
      name: "description",
      content:
        "SantriMaster adalah sistem manajemen pondok pesantren yang memudahkan pengelolaan data santri, kamar, dan fasilitas dengan efisien dan terintegrasi.",
    },
    { name: "keywords", content: "santri, pondok, santri master" },
  ],
});
</script>

<template>
  <router-view />
</template>
