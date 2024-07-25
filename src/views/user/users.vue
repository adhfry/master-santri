<template>
  <div>
    <!-- <div class="w-full flex justify-center items-center">
      <table class="table table-striped table-responsive" id="example">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.id }}</td>
            <td>
              <button
                type="button"
                @click="openModal(user)"
                class="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
              >
                Open dialog
              </button>
            </td>
          </tr>
          <tr>
            <td>Nama</td>
            <td>TTL</td>
            <td>
              <button
                type="button"
                @click="openModal({ id: 1, name: 'aaa' })"
                class="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
              >
                Open dialog
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->
    <div class="w-full flex justify-center items-center">
      <table class="table table-striped table-responsive" id="example">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Lengkap</th>
            <th>NIK</th>
            <th>Alamat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ahda Firly</td>
            <td>3529012101</td>
            <td>Jl. Diponegoro</td>
            <td>
              <button
                type="button"
                @click="openModal()"
                class="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
              >
                Open dialog
              </button>
            </td>
          </tr>
          <tr>
            <td>Nama</td>
            <td>TTL</td>
            <td>
              <button
                type="button"
                @click="openModal({ id: 1, name: 'aaa' })"
                class="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
              >
                Open dialog
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-100">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Payment successful
                </DialogTitle>
                <div class="mt-2">
                  <form action="">
                    <label
                      for="price"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >Price</label
                    >
                    <div class="relative mt-2 rounded-md shadow-sm">
                      <div
                        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                      >
                        <span class="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="0.00"
                      />
                    </div>
                  </form>
                </div>

                <div class="mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="tutup"
                  >
                    Got it, thanks!
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import axios from "@/plugins/axios";

const isOpen = ref(false);

const users = ref([]);

const getdata = () => {
  axios
    .get("/santri")
    .then((res) => {
      users.value = res.data.data;
      nextTick(() => {
        $("#example").DataTable({
          language: {
            search: "",
            searchPlaceholder: "Search...",
            paginate: {
              previous: "<<",
              next: ">>",
            },
          },
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

function closeModal() {
  isOpen.value = true;
}

const tutup = () => {
  isOpen.value = false;
};
function openModal(user) {
  isOpen.value = true;
  console.log(user.id);
}

onMounted(() => {
  getdata();
});
</script>

<style>
#example_wrapper {
  font-family: "Inter", sans-serif;
  justify-content: center;
  align-items: centers;
  font-size: 14px;
  font-weight: 400;
  width: calc(100% - 50px);
}

.dataTables_wrapper .dataTables_filter input {
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding-left: 9px;
  background-color: #f7f7f7;
}

.dataTables_wrapper .dataTables_paginate .paginate_button {
  border-radius: 50% !important;
  padding: 0.5em 0.9em !important;
  margin-top: 10px;
}
.dataTables_wrapper .dataTables_paginate .paginate_button.current {
  color: red;
}
</style>
