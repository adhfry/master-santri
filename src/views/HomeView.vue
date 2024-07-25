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
          class="absolute z-10 bg-[url('@/assets/img/lentera1.png')] hidden xl:block -mt-4 animate-bounce-slow inset-0 left-[41rem] dark:bg-neutral-900 bg-contain bg-no-repeat"
        ></div>
        <div
          class="absolute z-10 bg-[url('@/assets/img/star.png')] hidden xl:block -mt-1 animate-pulse inset-0 left-[70rem] dark:bg-neutral-900 bg-contain bg-no-repeat h-32"
        ></div>
        <div
          class="absolute inset-[0.05rem] left-[50rem] bg-gradient-to-tl rotate-[25deg] -mt-12 from-purple-300 to-white bg-cover h-72 rounded-full"
        ></div>
        <p
          class="mt-1 me-20 mb-0 text-end text-2xl text-gray-500 dark:text-neutral-400 z-10"
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
            class="mt-3 ms-3 backdrop-blur-custom font-sfPro text-gray-600 text-2xl font-semibold bg-transparent w-[5rem] h-[5rem] rounded-full flex items-center justify-center dark:text-neutral-400"
          >
            80
          </p>
          <img
            src="@/assets/img/boy-rocket.png"
            class="inset-2 ms-32 animate-bounce-slow -rotate-12 absolute w-36"
            alt=""
          />
        </div>
      </div>
      <div
        class="bg-white border custom-gradient relative h-[10rem] overflow-hidden rounded-xl shadow-sm w-1/4 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Data Santri
          </h3>
          <p
            class="mt-3 ms-3 text-gray-500 backdrop-blur-sm text-2xl font-semibold bg-white/50 w-[5rem] h-[5rem] rounded-full flex items-center justify-center dark:text-neutral-400"
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
        class="bg-white border custom-gradient relative h-[10rem] overflow-hidden rounded-xl shadow-sm w-1/4 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Data Santri
          </h3>
          <p
            class="mt-3 ms-3 text-gray-500 text-2xl font-semibold bg-white/25 w-[5rem] h-[5rem] rounded-full flex items-center justify-center dark:text-neutral-400"
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
        class="bg-white border custom-gradient relative h-[10rem] overflow-hidden rounded-xl shadow-sm w-1/4 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Data Santri
          </h3>
          <p
            class="mt-3 ms-3 text-gray-500 text-2xl font-semibold bg-white/25 w-[5rem] h-[5rem] rounded-full flex items-center justify-center dark:text-neutral-400"
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

.custom-gradient {
  background: linear-gradient(
      135deg,
      rgba(0, 171, 193, 0.441),
      rgba(255, 83, 112, 0.286)
    ),
    radial-gradient(
      circle at 30% 30%,
      rgba(255, 255, 255, 0.6),
      transparent 40%
    ),
    radial-gradient(
      circle at 70% 70%,
      rgba(255, 255, 255, 0.6),
      transparent 40%
    );
  background-blend-mode: screen;
}

@keyframes waveAnimation {
  0% {
    transform: translateX(-0.025%);
  }
  100% {
    transform: translateX(30%);
  }
}
@keyframes upDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0.5rem);
  }
  100% {
    transform: translateY(0);
  }
}

.animate-bounce-slow {
  animation: upDown 3s ease-in-out infinite;
}
.animate-wave {
  animation: waveAnimation 20s linear infinite;
  width: 200%;
  height: 100%;
}
</style>
