<template>
  <div>
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
    <div class="flex flex-row gap-5 mt-5">
      <div
        class="bg-white border relative h-[10rem] overflow-hidden rounded-xl shadow-sm w-1/4 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Data Santri
          </h3>
          <p
            class="mt-8 ms-5 text-gray-500 text-4xl font-bold dark:text-neutral-400"
          >
            250
          </p>
          <img
            src="@/assets/img/molekul.png"
            class="inset-8 ms-32 -rotate-45 absolute w-32"
            alt=""
          />
        </div>
      </div>
      <div
        class="bg-white border w-1/4 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Card title
          </h3>
          <p class="mt-2 text-gray-500 dark:text-neutral-400">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a
            class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
            href="#"
          >
            Card link
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
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
        </div>
      </div>
      <div
        class="bg-white border w-1/4 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Card title
          </h3>
          <p class="mt-2 text-gray-500 dark:text-neutral-400">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a
            class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
            href="#"
          >
            Card link
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
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
        </div>
      </div>
      <div
        class="bg-white border w-1/4 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Card title
          </h3>
          <p class="mt-2 text-gray-500 dark:text-neutral-400">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a
            class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
            href="#"
          >
            Card link
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
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
        </div>
      </div>
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
