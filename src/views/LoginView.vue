<template>
  <div
    class="min-h-screen bg-gray-100 text-gray-900 flex justify-center font-inter"
  >
    <div
      class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1"
    >
      <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div>
          <img
            src="@/assets/favicon/santrimaster-icon.jpeg"
            class="w-32 mx-auto rounded-full"
          />
        </div>
        <div class="mt-12 flex flex-col items-center">
          <h1 class="text-2xl xl:text-3xl font-semibold">Sign in</h1>
          <div class="w-full flex-1">
            <div class="my-4 border-b text-center">
              <div
                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
              >
                Welcome to Santri Master
              </div>
            </div>
            <div class="mx-auto max-w-xs">
              <div>
                <label
                  for="hs-leading-icon"
                  class="block text-sm font-medium mb-2 dark:text-white"
                  >Username</label
                >
                <div class="relative">
                  <input
                    type="text"
                    id="hs-leading-icon"
                    name="hs-leading-icon"
                    class="py-3 px-4 ps-11 border block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="santri@gmail.com"
                  />
                  <div
                    class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4"
                  >
                    <svg
                      class="shrink-0 size-4 text-gray-400 dark:text-neutral-600"
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
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path
                        d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label
                  for="hs-leading-icon"
                  class="block text-sm font-medium mb-2 dark:text-white"
                  >Password</label
                >
                <div class="relative">
                  <input
                    type="password"
                    id="hs-leading-icon"
                    name="hs-leading-icon"
                    class="py-3 px-4 border ps-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="*****"
                  />
                  <div
                    class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4"
                  >
                    <i
                      class="bx bxs-key shrink-0 size-4 text-gray-400 dark:text-neutral-600"
                    ></i>
                  </div>
                </div>
              </div>
              <button
                class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                @click="$router.push('/home')"
              >
                <i class="bx bx-log-in text-lg"></i>
                <span class="ml-3"> Log in </span>
              </button>
              <p class="mt-6 text-xs text-gray-600 text-center">
                I agree to abide by Santri Master's
                <a href="#" class="border-b border-gray-500 border-dotted">
                  Terms of Service
                </a>
                and its
                <a href="#" class="border-b border-gray-500 border-dotted">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
        <div
          class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
          style="
            background-image: url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');
          "
        >
          <img
            src="@/assets/img/login.png"
            class="w-40 animate-bounce-slow"
            alt=""
          />

          <img
            src="@/assets/img/login3.png"
            class="w-40 inset-0 relative ms-96 -mt-40 animate-bounce-slow1"
            alt=""
          />
          <img
            src="@/assets/img/login2.png"
            class="w-40 inset-0 relative ms-96 mt-80 animate-bounce-slow2"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "unhead";
import { onMounted } from "vue";

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
onMounted(() => {
  const cekRefresh = localStorage.getItem("cekRefresh");
  if (cekRefresh) {
    window.location.reload();
    localStorage.removeItem("cekRefresh");
  }
});
</script>
