<template>
  <div>
    <div
      class="relative w-full h-[7.525rem] overflow-hidden rounded-xl shadow-sm"
    >
      <div
        class="absolute inset-0 bg-[url('@/assets/img/wave.png')] bg-cover bg-size-1/2"
      ></div>

      <div
        class="absolute inset-[0.05rem] dark:hidden bg-white dark:bg-neutral-900 bg-cover h-40 animate-wave"
      ></div>
      <div
        class="flex flex-col bg-white border shadow-xl rounded-xl overflow-hidden p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <div
          class="absolute bg-[url('@/assets/img/lentera1.png')] hidden xl:block -mt-4 animate-bounce-slow inset-0 left-[41rem] bg-contain bg-no-repeat"
        ></div>
        <div
          class="absolute z-[1] bg-[url('@/assets/img/star.png')] hidden xl:block -mt-1 animate-pulse inset-0 left-[70rem] bg-contain bg-no-repeat h-32"
        ></div>
        <div
          class="absolute inset-[0.05rem] left-[50rem] dark:bg-gradient-to-tl bg-gradient-to-tl rotate-[25deg] -mt-12 dark:from-purple-100 from-purple-400 dark:to-transparent bg-cover h-72 rounded-full"
        ></div>
        <p
          class="mt-1 me-20 mb-0 text-end text-2xl text-slate-700 dark:text-gray-200 z-10"
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
        class="bg-white border custom-gradient relative h-[10rem] overflow-hidden rounded-xl shadow-sm w-1/4 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-slate-700 dark:text-white">
            Data Santri
          </h3>

          <p
            class="mt-3 ms-3 backdrop-blur-custom font-sfPro text-gray-600 text-2xl font-semibold bg-transparent w-[5rem] h-[5rem] rounded-full flex items-center justify-center dark:text-white"
          >
            80
          </p>
          <img
            src="@/assets/img/boy-rocket.png"
            class="inset-2 ms-32 animate-bounce-slow2 -rotate-12 absolute w-36"
            alt=""
          />
        </div>
      </div>
      <div
        class="bg-white border custom-gradient relative h-[10rem] overflow-hidden rounded-xl shadow-sm w-1/4 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-slate-700 dark:text-white">
            Data Kamar
          </h3>

          <p
            class="mt-3 ms-3 backdrop-blur-custom font-sfPro text-gray-600 text-2xl font-semibold bg-transparent w-[5rem] h-[5rem] rounded-full flex items-center justify-center dark:text-white"
          >
            17
          </p>
          <img
            src="@/assets/img/kasur2.png"
            class="inset-8 ms-32 animate-shake-slow absolute w-32"
            alt=""
          />
        </div>
      </div>
      <div
        class="bg-white border custom-gradient relative h-[10rem] overflow-hidden rounded-xl shadow-sm w-1/4 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-slate-700 dark:text-white">
            Data Santri
          </h3>

          <p
            class="mt-3 ms-3 backdrop-blur-custom font-sfPro text-gray-600 text-2xl font-semibold bg-transparent w-[5rem] h-[5rem] rounded-full flex items-center justify-center dark:text-white"
          >
            80
          </p>
          <img
            src="@/assets/img/boy-rocket.png"
            class="inset-2 ms-32 animate-bounce-slow2 -rotate-12 absolute w-36"
            alt=""
          />
        </div>
      </div>
      <div
        class="bg-white border custom-gradient relative h-[10rem] overflow-hidden rounded-xl shadow-sm w-1/4 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-slate-700 dark:text-white">
            Data Santri
          </h3>

          <p
            class="mt-3 ms-3 backdrop-blur-custom font-sfPro text-gray-600 text-2xl font-semibold bg-transparent w-[5rem] h-[5rem] rounded-full flex items-center justify-center dark:text-white"
          >
            80
          </p>
          <img
            src="@/assets/img/boy-rocket.png"
            class="inset-2 ms-32 animate-bounce-slow2 -rotate-12 absolute w-36"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "unhead";

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content:
        "Halaman untuk mengelola data santri, kamar, dan fasilitas dengan efisien dan terintegrasi dalam sistem Santri Master.",
    },
  ],
});
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
