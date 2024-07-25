<template>
  <div>
    <div>Login</div>
    <router-link to="/home">Klik Disini :)</router-link>
  </div>
</template>

<script setup>
import { useHead } from "unhead";

useHead({
  title: "Login",
  meta: [
    {
      name: "description",
      content:
        "Silahkan Login untuk mengelola data santri, kamar, dan fasilitas dengan efisien dan terintegrasi dalam sistem Santri Master.",
    },
  ],
});
</script>
