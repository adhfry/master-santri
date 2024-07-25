<template>
  <div>
    <button
      v-if="darkMode === true"
      type="button"
      class="inline-flex items-center gap-x-2 py-1 px-3 bg-white/10 rounded-full text-sm text-white hover:bg-white/20 focus:outline-none focus:bg-white/20"
      @click="toggleTheme"
    >
      <svg
        class="shrink-0 size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
      Dark
    </button>
    <button
      v-if="darkMode === false"
      type="button"
      @click="toggleTheme"
      class="inline-flex items-center gap-x-2 py-1 px-3 bg-black/10 rounded-full text-sm text-black hover:bg-black/20 focus:outline-none focus:bg-black/20"
    >
      <svg
        class="shrink-0 size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>
      Light
    </button>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useThemeStore } from "@/stores/theme";

// konfigurasi
const themeStore = useThemeStore();
onMounted(() => {
  themeStore.initializeTheme();
});
const darkMode = computed(() => themeStore.darkMode);

// ubah tema
const toggleTheme = () => {
  themeStore.toggleTheme();
};
</script>
