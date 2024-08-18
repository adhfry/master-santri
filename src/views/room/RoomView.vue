<template>
  <div>
    <Card>
      <template #header-card> Data Kamar Santri Al-Hidayah 2 </template>
      <template #title-card>
        <div class="flex justify-end me-5">
          <button
            type="button"
            class="py-2 px-4 inline-flex rounded-md items-center gap-x-2 text-sm font-medium border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
            @click="openAddKamar"
          >
            <i class="bx bx-user-plus"></i> Data Kamar
          </button>
        </div>
      </template>
      <div v-if="kamars.length > 1">
        <div class="flex flex-col">
          <div class="-m-1.5 overflow-x-auto">
            <div
              class="p-1.5 min-w-full flex flex-col lg:flex-row align-middle gap-4"
            >
              <!-- Tabel Kamar -->
              <div class="overflow-x-auto rounded-md w-full lg:w-2/5">
                <table
                  class="min-w-full divide-y border rounded-md divide-gray-200 dark:divide-neutral-700"
                >
                  <thead>
                    <tr>
                      <th
                        class="ps-4 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        No
                      </th>
                      <th
                        class="px-3 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Kamar
                      </th>
                      <th
                        class="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Kapasitas
                      </th>
                      <th
                        class="px-4 py-3 text-center flex justify-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    class="divide-y divide-gray-200 dark:divide-neutral-700"
                  >
                    <tr
                      class="hover:bg-gray-200 odd:bg-white even:bg-slate-100 dark:odd:bg-neutral-800 dark:even:bg-neutral-700 dark:hover:bg-neutral-700"
                      v-for="(kamar, index) in kamars"
                      :key="kamar.id"
                    >
                      <td
                        class="ps-4 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                      >
                        {{ index + 1 }}
                      </td>
                      <td
                        class="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                      >
                        {{ kamar.kamar }}
                      </td>
                      <td
                        class="px-1 py-4 whitespace-nowrap text-sm"
                        :class="{
                          'text-red-500':
                            getOccupied(kamar) === kamar.kapasitas,
                          'text-gray-800 dark:text-neutral-200':
                            getOccupied(kamar) !== kamar.kapasitas,
                        }"
                      >
                        {{ `${getOccupied(kamar)}/${kamar.kapasitas}` }}
                        <span class="text-red-500">{{
                          getOccupied(kamar) === kamar.kapasitas ? "Penuh" : ""
                        }}</span>
                      </td>
                      <td
                        class="px-4 py-4 flex justify-center gap-2 whitespace-nowrap text-center text-sm font-medium"
                      >
                        <button
                          @click="viewKamar(kamar.id)"
                          type="button"
                          class="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-200 text-blue-800 hover:bg-blue-300 focus:outline-none focus:bg-blue-300 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
                        >
                          <i class="fa-regular fa-eye"></i>
                        </button>
                        <button
                          @click="editKamar(kamar.id)"
                          type="button"
                          class="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 focus:outline-none focus:bg-yellow-200 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500 dark:bg-yellow-800/30 dark:hover:bg-yellow-800/20 dark:focus:bg-yellow-800/20"
                        >
                          <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button
                          @click="deleteKamar(kamar.id)"
                          type="button"
                          class="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20"
                        >
                          <i class="bx bx-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Detail Kamar -->
              <div
                class="overflow-x-auto border rounded-md w-full lg:w-3/5"
                v-if="selectedKamar != null"
              >
                <div class="min-w-full divide-gray-200 dark:divide-neutral-700">
                  <div
                    class="border border-x-0 border-t-0 border-b h-10 flex justify-around items-center ps-5"
                  >
                    <h2 class="font-semibold text-sm">
                      Kamar:
                      <span class="font-normal">{{ selectedKamar.kamar }}</span>
                    </h2>
                    <h2 class="text-sm font-semibold">
                      Kapasitas:
                      <span
                        :class="{
                          'text-red-500 font-normal bg-red-100 px-2 py-1 rounded-xl':
                            isFull(selectedKamar),
                        }"
                        >{{ getOccupied(selectedKamar) }}/{{
                          selectedKamar.kapasitas
                        }}
                        {{ isFull(selectedKamar) ? "Kamar Penuh" : "" }}</span
                      >
                    </h2>
                    <h2 class="text-sm font-semibold">
                      Kasur Kosong:
                      <span
                        :class="{
                          'text-red-500 font-normal bg-red-100 px-2 py-1 rounded-xl':
                            isFull(selectedKamar),
                        }"
                        >{{
                          selectedKamar.kapasitas - getOccupied(selectedKamar)
                            ? selectedKamar.kapasitas -
                              getOccupied(selectedKamar)
                            : ""
                        }}
                        {{
                          isFull(selectedKamar) ? "Tidak tersedia" : ""
                        }}</span
                      >
                    </h2>
                  </div>
                  <!-- Denah -->
                  <div
                    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-6 py-3 text-sm font-normal"
                  >
                    <div
                      v-for="(slot, index) in getSlots(selectedKamar)"
                      :key="index"
                      :class="[
                        'row-span-3 rounded-md flex px-4 gap-1 items-center',
                        slot
                          ? 'bg-blue-200/50 hover:bg-blue-200/75 cursor-pointer'
                          : 'bg-red-200/50 hover:bg-red-200/75 cursor-not-allowed',
                      ]"
                      @click="
                        slot ? openUserRoom(slot, selectedKamar.kamar) : null
                      "
                    >
                      <i class="bx bxs-bed"></i>{{ slot || "Kosong" }}
                    </div>
                  </div>
                </div>
              </div>
              <!-- Pesan kosong -->
              <div
                v-if="selectedKamar === null"
                class="overflow-x-auto rounded-md w-full lg:w-3/5"
              >
                <div class="min-w-full divide-gray-200 dark:divide-neutral-700">
                  <div
                    class="h-10 rounded-md border flex justify-around items-center ps-5"
                  >
                    <span
                      >Klik tombol
                      <strong>
                        <button
                          type="button"
                          class="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
                        >
                          <i class="fa-regular fa-eye"></i>
                        </button>
                      </strong>
                      pada salah satu kamar untuk melihat isi kamar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>

    <!-- Modal -->
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" class="relative z-[69]">
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
                class="w-full max-w-lg transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-semibold leading-6 text-gray-900 mb-5"
                >
                  <span v-if="addKamarModal">Input Data Kamar</span>
                  <span v-if="editKamarModal">Edit Data Kamar</span>
                  <span v-if="userDataModal"
                    >Data {{ selectedSantri.nama }}</span
                  >
                </DialogTitle>
                <div class="mt-2">
                  <!-- userDataModal -->
                  <form @click.prevent="" v-if="userDataModal">
                    <div>
                      <label
                        for="kamar"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Nama Lengkap</label
                      >
                      <div class="relative mt-1 rounded-md">
                        <input
                          type="text"
                          name="kamar"
                          id="kamar"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset bg-slate-200 ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan Kamar"
                          disabled
                          v-model="selectedSantri.nama_lengkap"
                        />
                      </div>
                    </div>
                    <div class="mt-2">
                      <label
                        for="kamar"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Kamar</label
                      >
                      <div class="relative mt-1 rounded-md">
                        <select
                          id="kamar"
                          class="py-2 px-2 pe-9 block w-auto border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          v-model="selectedPindah"
                        >
                          <option selected="">
                            {{ selectedSantri.kamar }}
                          </option>
                          <option value="1">Pindah Kamar ?</option>
                        </select>
                      </div>
                    </div>

                    <div v-if="pindah === '1'">
                      <div
                        class="sm:flex mt-3 border border-gray-200 rounded-md shadow-sm"
                      >
                        <span
                          class="py-2 px-2 inline-flex items-center min-w-fit w-full border border-gray-200text-sm text-gray-500 -ms-px first:rounded-t-md last:rounded-b-md sm:w-auto sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400"
                          >Dari</span
                        >
                        <input
                          name="dariKamar"
                          id="dariKamar"
                          type="text"
                          disabled
                          class="py-1 px-2 pe-1 block w-full border-gray-600 shadow-sm bg-slate-200 -ms-px first:rounded-t-sm last:rounded-b-sm sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          placeholder="Dari"
                          v-model="selectedSantri.kamar"
                        />
                        <span
                          class="py-1 px-2 inline-flex items-center min-w-fit w-full border border-gray-200text-sm text-gray-500 -ms-px first:rounded-t-md last:rounded-b-md sm:w-auto sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400"
                          >Ke</span
                        >
                        <select
                          id="keKamar"
                          class="py-2 px-2 pe-9 block w-auto border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          v-model="newKamar"
                        >
                          <option selected="true" value="selected">
                            - Pilih Kamar Baru -
                          </option>
                          <option
                            v-for="kamar in availableKamars"
                            :key="kamar.id"
                            :value="kamar.id"
                          >
                            {{
                              `${kamar.kamar} - ${getOccupied(kamar)}/${
                                kamar.kapasitas
                              }`
                            }}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="mt-4 justify-end flex gap-2">
                      <button
                        type="button"
                        class="inline-flex justify-center items-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                        @click="closeModal"
                      >
                        <i class="bx bx-log-out-circle me-1"></i> Batal
                      </button>
                      <button
                        v-if="pindah === '1'"
                        type="submit"
                        :class="[
                          'inline-flex justify-center items-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium   focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2',
                          newKamarVal === 'selected'
                            ? 'bg-gray-100  text-gray-900 cursor-not-allowed'
                            : 'bg-blue-100 hover:bg-blue-200 focus-visible:ring-blue-500 text-blue-900',
                        ]"
                        @click="updateUserKamar"
                        :disabled="newKamarVal === 'selected'"
                      >
                        <i
                          class="bx bx-save me-1"
                          v-if="newKamarVal !== 'selected'"
                        ></i>
                        {{
                          newKamarVal === "selected"
                            ? "Pilih Kamar Baru Terlebih Dahulu!"
                            : "Simpan Perubahan"
                        }}
                      </button>
                    </div>
                  </form>
                  <!-- addKamarModal -->
                  <form
                    @submit.prevent=""
                    v-if="addKamarModal"
                    class="grid grid-cols-2 justify-between gap-3"
                  >
                    <div class="max-w-lg space-y-3 col-span-1">
                      <!-- Kamar -->
                      <label
                        for="kamar"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Kamar</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          v-model="form.kamar"
                          type="text"
                          name="kamar"
                          id="kamar"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan Kamar"
                        />
                      </div>
                      <!-- End Kamar -->
                    </div>
                    <!-- Sebelah Kanan -->
                    <div class="max-w-lg space-y-3 col-span-1">
                      <!-- Kapasitas -->
                      <label
                        for="kapasitas"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Kapasitas</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          v-model="form.kapasitas"
                          type="number"
                          name="kapasitas"
                          id="kapasitas"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan Kapasitas"
                        />
                      </div>
                      <!-- End Kapasitas -->
                    </div>
                    <div class="mt-4 justify-end flex col-span-2 gap-2">
                      <button
                        type="button"
                        class="inline-flex justify-center items-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                        @click="closeModal"
                      >
                        <i class="bx bx-log-out-circle me-1"></i> Batal
                      </button>
                      <button
                        type="button"
                        class="inline-flex justify-center items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        @click="addKamar"
                      >
                        <i class="bx bx-save me-1"></i> Simpan
                      </button>
                    </div>
                  </form>
                  <!-- editKamarModal -->
                  <form
                    @submit.prevent=""
                    v-if="editKamarModal"
                    class="grid grid-cols-2 justify-between gap-3"
                  >
                    <div class="max-w-lg space-y-3 col-span-1">
                      <!-- Kamar -->
                      <label
                        for="kamar"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Kamar</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          v-model="form.kamar"
                          type="text"
                          name="kamar"
                          id="kamar"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan Kamar"
                        />
                      </div>
                      <!-- End Kamar -->
                    </div>
                    <!-- Sebelah Kanan -->
                    <div class="max-w-lg space-y-3 col-span-1">
                      <!-- Kapasitas -->
                      <label
                        for="kapasitas"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Kapasitas</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          v-model="form.kapasitas"
                          type="number"
                          name="kapasitas"
                          id="kapasitas"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan Kapasitas"
                        />
                      </div>
                      <!-- End Kapasitas -->
                    </div>
                    <div class="mt-4 justify-end flex col-span-2 gap-2">
                      <button
                        type="button"
                        class="inline-flex justify-center items-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                        @click="closeModal"
                      >
                        <i class="bx bx-log-out-circle me-1"></i> Batal
                      </button>
                      <button
                        type="button"
                        class="inline-flex justify-center items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        @click="addKamar"
                      >
                        <i class="bx bx-save me-1"></i> Simpan
                      </button>
                    </div>
                  </form>
                </div>

                <div class="mt-2 justify-end flex gap-2"></div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <TransitionRoot appear :show="isDel" as="template">
      <Dialog as="div" class="relative z-[69]">
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
                class="w-full max-w-lg transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-semibold leading-6 text-gray-900 mb-5"
                >
                  <span v-if="addKamarModal">Input Data Kamar</span>
                  <span v-if="userDataModal"
                    >Data {{ selectedSantri.nama }}</span
                  >
                </DialogTitle>
                <div class="mt-2">
                  <div
                    class="relative flex flex-col bg-white rounded-xl dark:bg-neutral-900"
                  >
                    <div class="p-4 sm:p-10 text-center overflow-y-auto">
                      <!-- Icon -->
                      <span
                        class="mb-4 inline-flex justify-center items-center size-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500 dark:bg-yellow-700 dark:border-yellow-600 dark:text-yellow-100"
                      >
                        <svg
                          class="shrink-0 size-5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                          />
                        </svg>
                      </span>
                      <!-- End Icon -->

                      <h3
                        id="hs-sign-out-alert-small-window-label"
                        class="mb-2 text-2xl font-bold text-gray-800 dark:text-neutral-200"
                      >
                        Konfirmasi
                      </h3>
                      <p class="text-gray-500 dark:text-neutral-500">
                        Apakah anda yakin untuk menghapus kamar
                        {{ selectedDelKamar }}
                      </p>

                      <div class="mt-6 grid gap-y-2">
                        <button
                          type="button"
                          class="py-2.5 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-red-200 bg-red-200 text-red-800 shadow-sm hover:bg-red-300 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-red-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Ya, Saya Yakin
                        </button>
                        <button
                          @click="isDel = false"
                          type="button"
                          class="py-2.5 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                          data-hs-overlay="#hs-sign-out-alert-small-window"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-2 justify-end flex gap-2"></div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { useHead } from "unhead";
useHead({
  title: "Rooms",
});

import Card from "../../components/Card.vue";
import { ref, onMounted, nextTick, computed } from "vue";
import axios from "@/plugins/axios";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { useToast } from "vue-toastification";
import HSOverlay from "@preline/overlay";

const editKamarModal = ref(false);
const addKamarModal = ref(false);
const userDataModal = ref(false);

//** Dummy Data */
const kamars = ref([]);
const newKamar = ref("selected");
const users = ref([]);
const selectedKamar = ref(null);
const selectedDelKamar = ref(null);
const selectedPindah = ref(null);
const selectedSantri = ref({});

const pindah = computed(() => selectedPindah.value);
const newKamarVal = computed(() => newKamar.value);

kamars.value = [
  { id: 1, kamar: "Semangka", kapasitas: 49 },
  { id: 2, kamar: "Durian", kapasitas: 20 },
  { id: 3, kamar: "Apel", kapasitas: 9 },
];
users.value = [
  { id: 1, nama: "Ahda", nama_lengkap: "Ahda Firly Barori" },
  { id: 2, nama: "Rahma", nama_lengkap: "Rahma Indah" },
  { id: 3, nama: "Fikri", nama_lengkap: "Fikri Hidayat" },
  { id: 4, nama: "Sofia", nama_lengkap: "Sofia Permatasari" },
  { id: 5, nama: "Ayu", nama_lengkap: "Ayu Syarifah" },
  { id: 13, nama: "Fadil", nama_lengkap: "Fadil Zaini" },
  { id: 14, nama: "Aldo", nama_lengkap: "Aldo Wijaya" },
  { id: 15, nama: "Rina", nama_lengkap: "Rina Sari" },
  { id: 16, nama: "Zainal", nama_lengkap: "Zainal Arifin" },
  { id: 17, nama: "Yuliana", nama_lengkap: "Yuliana Kartika Sari" },
  { id: 18, nama: "Rafi", nama_lengkap: "Rafi Nur Maulana" },
  { id: 19, nama: "Vivian", nama_lengkap: "Vivian Zaskia" },
  { id: 20, nama: "Rizky", nama_lengkap: "Rizky Yudha" },
  { id: 21, nama: "Aisyah", nama_lengkap: "Sayyidatun Aisyah" },
  { id: 22, nama: "Alfred", nama_lengkap: "Alfred Setiadi" },
  { id: 23, nama: "Diana", nama_lengkap: "Diana Camelia" },
  { id: 24, nama: "Muhammad", nama_lengkap: "Rendi Susanto" },
];
// analogikan kamar id menampung data id user
const userKamarMapping = ref({
  1: [1, 2, 3, 4, 5],
  2: [13, 14, 15, 16, 17],
  3: [18, 19, 20, 21, 22, 23, 24, 1],
});

const viewKamar = (kamarId) => {
  selectedKamar.value = kamars.value.find((kamar) => kamar.id === kamarId);
};

const editKamar = (kamarId) => {
  isOpen.value = true;
  editKamarModal.value = true;
  selectedKamar.value = kamars.value.find((kamar) => kamar.id === kamarId);
  form.value = selectedKamar.value;
  console.log(`Edit kamar with id: ${kamarId}`);
};

const deleteKamar = (kamarId) => {
  isDel.value = true;
  selectedDelKamar.value = kamarId;
  console.log(`Delete kamar with id: ${kamarId}`);
};

const getSantrisInKamar = (kamarId) => {
  return (
    userKamarMapping.value[kamarId]?.map((userId) => {
      return users.value.find((user) => user.id === userId)?.nama || "Kosong";
    }) || []
  );
};

const availableKamars = computed(() => {
  return kamars.value.filter((kamar) => {
    const userCount = userKamarMapping.value[kamar.id].length || 0;
    return (
      kamar.kamar !== selectedSantri.value.kamar && userCount < kamar.kapasitas
    );
  });
});

// mendapatkan banyak santri dari sebuah kamar
const getSlots = (kamar) => {
  const santriList = getSantrisInKamar(kamar.id);
  while (santriList.length < kamar.kapasitas) {
    santriList.push(null);
  }
  return santriList;
};

const getOccupied = (kamar) => {
  return getSantrisInKamar(kamar.id).length;
};

const isFull = (kamar) => getOccupied(kamar) >= kamar.kapasitas;

const openUserRoom = (nama, kamar) => {
  // get data from nama
  const user = users.value.find((u) => u.nama === nama);
  selectedSantri.value = { ...user, kamar };
  selectedPindah.value = kamar;
  userDataModal.value = true;
  openModal();
};

const closeUserRoom = () => {
  userDataModal.value = false;
  selectedSantri.value = {};
};

const updateUserKamar = () => {
  const oldKamarId = kamars.value.find(
    (k) => k.kamar === selectedSantri.value.kamar
  ).id;
  const userId = users.value.find(
    (u) => u.nama === selectedSantri.value.nama
  ).id;

  // Remove santri from old kamar
  userKamarMapping.value[oldKamarId] = userKamarMapping.value[
    oldKamarId
  ].filter((id) => id !== userId);

  // Add santri to new kamar
  if (!userKamarMapping.value[newKamar.value]) {
    userKamarMapping.value[newKamar.value] = [];
  }
  userKamarMapping.value[newKamar.value].push(userId);

  closeModal();
};

const openAddKamar = () => {
  addKamarModal.value = true;
  openModal();
};

const closeAddKamar = () => {
  form.value = { ...initialForm };
  addKamarModal.value = false;
};
//** Modal */
const isOpen = ref(false);
const isDel = ref(false);
function closeModal() {
  newKamar.value = "selected";
  editKamarModal.value = false;
  closeUserRoom();
  closeAddKamar();
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
//** End Modal */
const errors = ref([]);
const initialForm = {
  kamar: null,
  kapasitas: null,
};

const edited = ref(false);

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
      console.log(err);
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

const editForm = (user) => {
  // alert(user);
  const openBtn = new HSOverlay(document.querySelector("#modal-gg"));
  openBtn.addEventListener("click", () => {
    HSOverlay.open("#modal-edit");
    console.log("kesini");
  });
};

const resetForm = () => {
  errors.value = [];
  form.value = { ...initialForm };
};
onMounted(() => {
  getdata();
});
</script>
