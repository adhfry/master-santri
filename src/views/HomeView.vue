<template>
  <div
    class="relative w-full h-[7.525rem] overflow-hidden rounded-xl shadow-sm"
  >
    <div
      class="absolute inset-0 bg-[url('@/assets/img/wave.png')] bg-cover bg-size-1/2"
    ></div>
    <div
      class="absolute inset-[0.05rem] bg-white dark:bg-neutral-900 bg-cover h-40 animate-wave"
    ></div>
    <div
      class="flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
    >
      <p
        class="mt-1 mb-0 text-end text-xl text-gray-500 dark:text-neutral-400 z-10"
      >
        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ
      </p>
      <h3 class="text-lg font-bold text-gray-800 dark:text-white gap z-10">
        {{ greeting }}
      </h3>
      <p
        class="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500 z-10"
      >
        Welcome to Santri Master by Al-Hidayah 2
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { format, formatDistanceToNow, getHours } from "date-fns";
import { id as idLocale } from "date-fns/locale";

const now = ref(new Date());
const updateClock = () => {
  now.value = new Date();
};

// Sapaan berdasarkan waktu
const greeting = computed(() => {
  const hour = getHours(now.value);
  if (hour < 12) return "Selamat Pagi";
  if (hour < 15) return "Selamat Siang";
  if (hour < 18) return "Selamat Sore";
  return "Selamat Malam";
});

onMounted(() => {
  setInterval(updateClock, 60000); // Update setiap menit
});
</script>

<style scoped>
.bg-size-1\/2 {
  background-size: calc(50% - 20px);
  background-position-x: 10rem;
  background-position-y: -1.25rem;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
@keyframes waveAnimation {
  0% {
    transform: translateX(-0.025%);
  }
  100% {
    transform: translateX(40%);
  }
}
.animate-wave {
  animation: waveAnimation 20s linear infinite;
  width: 200%;
  height: 100%;
}
</style>
