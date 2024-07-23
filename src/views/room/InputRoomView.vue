<template>
  <Card>
    <template #header-card> Data Santri Al-Hidayah 2 </template>
    <template #title-card>
      <div class="text-end justify-end me-5">
        <button type="button"
          class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
          aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-large-modal" data-hs-overlay="#hs-large-modal">
          + Tambah Data User
        </button>
      </div>
    </template>
    <!-- table -->
    <div>
      <div class="flex flex-col">
        <div class="overflow-x-auto mx-2">
          <div class="p-1.5 w-full inline-block align-middle">
            <div class="custom-scrollbar">
              <table id="example" class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      ID
                    </th>
                    <th scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      Kamar
                    </th>
                    <th scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      Kapasitas
                    </th>

                    <th scope="col"
                      class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr v-for="kamar in kamars" :key="kamar.id" class="group hover:bg-slate-100">
                    <td
                      class="px-6 fixed group-hover:bg-slate-100 bg-white py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {{ kamar.id }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {{ kamar.kamar }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {{ kamar.kapasitas }}
                    </td>

                    <td class="px-6 py-4 flex gap-2 whitespace-nowrap text-end text-sm font-medium">
                      <div class="hs-tooltip inline-block">
                        <button type="button"
                          class="hs-tooltip-toggle py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
                          aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-large-modal"
                          data-hs-overlay="#hs-large-modal" @click="openModal(1)">
                          <i class="bx bx-edit"></i>
                          <span
                            class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                            role="tooltip">
                            Edit Data
                          </span>
                        </button>
                      </div>
                      <div class="hs-tooltip inline-block">
                        <button aria-haspopup="dialog" aria-expanded="false"
                          aria-controls="hs-slide-down-animation-modal" data-hs-overlay="#hs-slide-down-animation-modal"
                          type="button"
                          class="hs-tooltip-toggle py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20">
                          <i class="bx bx-trash"></i>
                          <span
                            class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                            role="tooltip">
                            Delete Data
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div id="hs-slide-down-animation-modal"
        class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog" tabindex="-1" aria-labelledby="hs-slide-down-animation-modal-label">
        <div
          class="hs-overlay-animation-target hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div
            class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3 id="hs-slide-down-animation-modal-label" class="font-bold dark:text-white text-red-600">
                <i class="bx bx-error"></i>
                <div>Konfirmasi Penghapusan Data</div>
              </h3>
              <button type="button"
                class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                aria-label="Close" data-hs-overlay="#hs-slide-down-animation-modal">
                <span class="sr-only">Close</span>
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-y-auto">
              <p class="mt-1 text-gray-800 dark:text-neutral-400">
                Apakah anda yakin untuk menghapus data atas nama "nama user"
              </p>
            </div>
            <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
              <button type="button"
                class="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                data-hs-overlay="#hs-slide-down-animation-modal">
                Close
              </button>
              <button type="button"
                class="hs-tooltip-toggle py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20">
                Ya, Saya yakin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div>
      <div id="hs-large-modal"
        class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog" tabindex="-1" aria-labelledby="hs-large-modal-label">
        <div
          class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full m-3 lg:mx-auto">
          <div
            class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3 id="hs-large-modal-label" class="font-bold text-gray-800 dark:text-white">
                ADD ROOM
              </h3>
              <button type="button"
                class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                aria-label="Close" data-hs-overlay="#hs-large-modal">
                <span class="sr-only">Close</span>
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-y-auto">
              <form @submit.prevent="submitForm" class="flex justify-between gap-x-3">
                <div class="max-w-lg space-y-3 w-1/2">
                  <div class="relative">
                    <div class="relative">
                      <input type="text"
                        class="peer py-3 px-4 ps-11 w-full bg-gray-200 focus:outline-none focus:outline-blue-200 rounded-lg text-sm"
                        placeholder="Masukkan Nama Kamar" v-model="form.kamar">
                      <div
                        class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                        <i class='bx bx-bed shrink-0 size-4 text-gray-500 dark:text-neutral-500'></i>
                      </div>
                    </div>
                    <p class="text-xs ms-4 text-red-600 mt-2" id="hs-validation-name-error-helper" v-if="errors.no_hp">
                      {{ errors.no_hp[0] }}
                    </p>
                  </div>
                </div>
                <div class="max-w-lg space-y-3 w-1/2">
                  <div class="relative">
                    <div class="relative">
                      <input type="text"
                        class="peer py-3 px-4 ps-11 w-full bg-gray-200 focus:outline-none focus:outline-blue-200 rounded-lg text-sm"
                        placeholder="Masukkan Nama Kamar" v-model="form.kamar">
                      <div
                        class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                        <i class='bx bx-bed shrink-0 size-4 text-gray-500 dark:text-neutral-500'></i>
                      </div>
                    </div>
                    <p class="text-xs ms-4 text-red-600 mt-2" id="hs-validation-name-error-helper" v-if="errors.no_hp">
                      {{ errors.no_hp[0] }}
                    </p>
                  </div>
                </div>
              </form>
              <div class="flex justify-end items-center my-3 gap-x-3">
                <button type="submit"
                  class="py-[8px] px-2 inline-flex items-center gap-x-2 text-sm font-normal rounded-md border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                  <i class='bx bx-subdirectory-right' ></i> Submit
                </button>
                <button type="submit"
                  class="py-[8px] px-2 inline-flex items-center gap-x-2 text-sm font-normal rounded-md border border-transparent bg-slate-400 text-white hover:bg-salte-500 focus:outline-none focus:bg-slate-700 disabled:opacity-50 disabled:pointer-events-none">
                  <i class='bx bx-exit' ></i> Close
                </button>
                <button type="submit"
                  class="py-[8px] px-2 inline-flex items-center gap-x-2 text-sm font-normal rounded-md border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                  <i class='bx bx-subdirectory-right' ></i> Submit
                </button>
                <button type="submit"
                  class="py-[8px] px-2 inline-flex items-center gap-x-2 text-sm font-normal rounded-md border border-transparent bg-slate-400 text-white hover:bg-salte-500 focus:outline-none focus:bg-slate-700 disabled:opacity-50 disabled:pointer-events-none">
                  <i class='bx bx-exit' ></i> Close
                </button>
                <button type="submit"
                  class="py-[8px] px-2 inline-flex items-center gap-x-2 text-sm font-normal rounded-md border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                  <i class='bx bx-subdirectory-right' ></i> Submit
                </button>
                <button type="submit"
                  class="py-[8px] px-2 inline-flex items-center gap-x-2 text-sm font-normal rounded-md border border-transparent bg-slate-400 text-white hover:bg-salte-500 focus:outline-none focus:bg-slate-700 disabled:opacity-50 disabled:pointer-events-none">
                  <i class='bx bx-exit' ></i> Close
                </button>
                <button type="submit"
                  class="py-[8px] px-2 inline-flex items-center gap-x-2 text-sm font-normal rounded-md border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                  <i class='bx bx-subdirectory-right' ></i> Submit
                </button>
                <button type="submit"
                  class="py-[8px] px-2 inline-flex items-center gap-x-2 text-sm font-normal rounded-md border border-transparent bg-slate-400 text-white hover:bg-salte-500 focus:outline-none focus:bg-slate-700 disabled:opacity-50 disabled:pointer-events-none">
                  <i class='bx bx-exit' ></i> Close
                </button>
                <button type="submit"
                  class="py-[8px] px-2 inline-flex items-center gap-x-2 text-sm font-normal rounded-md border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                  <i class='bx bx-subdirectory-right' ></i> Submit
                </button>
                <button type="submit"
                  class="py-[8px] px-2 inline-flex items-center gap-x-2 text-sm font-normal rounded-md border border-transparent bg-slate-400 text-white hover:bg-salte-500 focus:outline-none focus:bg-slate-700 disabled:opacity-50 disabled:pointer-events-none">
                  <i class='bx bx-exit' ></i> Close
                </button>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup>
import Card from "../../components/Card.vue";
import { ref, onMounted, nextTick } from "vue";
import axios from "@/plugins/axios";

const kamars = ref([]);

import { useToast } from "vue-toastification";
const errors = ref([]);
const initialForm = {
  kamar: null,
  kapasitas: null,
};

const form = ref({ ...initialForm });

const toast = useToast();
const submitForm = async () => {
  await axios
    .post("/kamar", form.value)
    .then((res) => {
      console.log(res);
      errors.value = [];
      form.value = { ...initialForm };
      toast.success("Berhasil menambahkan data baru!");
    })
    .catch((err) => {
      toast.error("Gagal menambahkan data baru!");
      errors.value = err.response.data.errors;
    });
};

const getdata = () => {
  axios
    .get("/kamar")
    .then((res) => {
      kamars.value = res.data.data;
      nextTick(() => {
        $("#example").DataTable();
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
  getdata();
});
</script>
