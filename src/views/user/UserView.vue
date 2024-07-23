<template>
  <Card>
    <template #header-card> Data Santri Al-Hidayah 2 </template>
    <template #title-card>
      <div class="text-end justify-end me-5">
        <button
          type="button"
          class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="hs-large-modal"
          data-hs-overlay="#hs-large-modal"
        >
          + Tambah Data User
        </button>
      </div>
    </template>
    <div>
      <div class="flex flex-col">
        <div class="overflow-x-auto mx-2">
          <div class="p-1.5 w-full inline-block align-middle">
            <div class="custom-scrollbar">
              <table
                id="example"
                class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700"
              >
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Nama Lengkap
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Nama Panggilan
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      NIK
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Jenis Kelamin
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Tempat, Tanggal Lahir
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Tinggi
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Berat
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      No. HP
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Riwayat Penyakit
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Anak Ke
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Alamat
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Kota
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Kode Pos
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Pendidikan Terakhir
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Tahun Masuk
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Tahun Keluar
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr
                    v-for="user in users"
                    :key="user.id"
                    class="group hover:bg-slate-100"
                  >
                    <td
                      class="px-6 fixed group-hover:bg-slate-100 bg-white py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.id }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.nama_lengkap }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.panggilan }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.nik }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.jk === 0 ? "Laki-Laki" : "Perempuan" }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ `${user.tempat_lahir}, ${user.tgl_lahir}` }}
                    </td>

                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.tinggi + "cm" }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.berat + "kg" }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.no_hp }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.email }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.riwayat_penyakit }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ `${user.anak_ke} dari ${user.dari}` }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.alamat }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.kota }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.kode_pos }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.pendidikan }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.tahun_masuk }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.tahun_keluar }}
                    </td>
                    <td
                      class="px-6 py-4 flex gap-2 whitespace-nowrap text-end text-sm font-medium"
                    >
                      <div class="hs-tooltip inline-block">
                        <button
                          type="button"
                          class="hs-tooltip-toggle py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-large-modal"
                          data-hs-overlay="#hs-large-modal"
                          id="editBtn"
                          @click="editForm(user)"
                        >
                          <i class="bx bx-edit"></i>
                          <span
                            class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                            role="tooltip"
                          >
                            Edit Data
                          </span>
                        </button>
                      </div>
                      <div class="hs-tooltip inline-block">
                        <button
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-slide-down-animation-modal"
                          data-hs-overlay="#hs-slide-down-animation-modal"
                          type="button"
                          class="hs-tooltip-toggle py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20"
                        >
                          <i class="bx bx-trash"></i>
                          <span
                            class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                            role="tooltip"
                          >
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
      <div
        id="hs-slide-down-animation-modal"
        class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog"
        tabindex="-1"
        aria-labelledby="hs-slide-down-animation-modal-label"
      >
        <div
          class="hs-overlay-animation-target hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"
        >
          <div
            class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70"
          >
            <div
              class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700"
            >
              <h3
                id="hs-slide-down-animation-modal-label"
                class="font-bold dark:text-white text-red-600"
              >
                <i class="bx bx-error"></i>
                <div>Konfirmasi Penghapusan Data</div>
              </h3>
              <button
                type="button"
                class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                aria-label="Close"
                data-hs-overlay="#hs-slide-down-animation-modal"
              >
                <span class="sr-only">Close</span>
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
            <div
              class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700"
            >
              <button
                type="button"
                class="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                data-hs-overlay="#hs-slide-down-animation-modal"
              >
                Close
              </button>
              <button
                type="button"
                class="hs-tooltip-toggle py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20"
              >
                Ya, Saya yakin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div>
      <div
        id="hs-large-modal"
        class="hs-overlay [--overlay-backdrop:static] hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog"
        tabindex="-1"
        aria-labelledby="hs-large-modal-label"
      >
        <div
          class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full m-3 lg:mx-auto"
        >
          <div
            class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70"
          >
            <div
              class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700"
            >
              <h3
                id="hs-large-modal-label"
                class="font-bold text-gray-800 dark:text-white"
              >
                {{
                  edited.value === true ? "Edit Data User" : "Input Data User"
                }}
              </h3>
              <button
                type="reset"
                class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                aria-label="Close"
                data-hs-overlay="#hs-large-modal"
                @click="resetForm()"
              >
                <span class="sr-only">Close</span>
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
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-y-auto">
              <form @submit.prevent="submitForm" class="flex justify-between">
                <div class="max-w-lg space-y-3 w-1/2">
                  <!-- NIS Input -->
                  <div class="relative">
                    <input
                      type="text"
                      id="hs-floating-input-email-value"
                      :class="{
                        'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                        'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                          !errors.nis,
                        'border-red-500 focus:border-blue-500 focus:ring-blue-500':
                          errors.nis,
                      }"
                      placeholder="NIS"
                      name="namaLengkap"
                      v-model="form.nis"
                    />
                    <label
                      for="hs-floating-input-email-value"
                      class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                      >NIS
                    </label>
                    <p
                      class="text-xs ms-4 text-red-600 mt-2"
                      id="hs-validation-name-error-helper"
                      v-if="errors.nis"
                    >
                      {{ errors.nis[0] }}
                    </p>
                  </div>

                  <!-- End NIS Input -->
                  <!-- Nama Lengkap Input -->
                  <div class="relative">
                    <input
                      type="text"
                      id="hs-floating-input-email-value"
                      :class="{
                        'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                        'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                          !errors.nama_lengkap,
                        'border-red-500 focus:border-red-500 focus:ring-red-500':
                          errors.nama_lengkap,
                      }"
                      placeholder="Nama Lengkap"
                      name="namaLengkap"
                      v-model="form.nama_lengkap"
                    />
                    <label
                      for="hs-floating-input-email-value"
                      class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                      >Nama Lengkap</label
                    >
                    <p
                      class="text-xs ms-4 text-red-600 mt-2"
                      id="hs-validation-name-error-helper"
                      v-if="errors.nama_lengkap"
                    >
                      {{ errors.nama_lengkap[0] }}
                    </p>
                  </div>
                  <!-- End Nama Lengkap Input -->
                  <!-- Nama Panggilan Input -->
                  <div class="relative">
                    <input
                      type="text"
                      id="hs-floating-input-email-value"
                      :class="{
                        'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                        'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                          !errors.panggilan,
                        'border-red-500 focus:border-red-500 focus:ring-red-500':
                          errors.panggilan,
                      }"
                      placeholder="Nama Panggilan"
                      name="namaPanggilan"
                      v-model="form.panggilan"
                    />
                    <label
                      for="hs-floating-input-email-value"
                      class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                      >Nama Panggilan</label
                    >
                    <p
                      class="text-xs ms-4 text-red-600 mt-2"
                      id="hs-validation-name-error-helper"
                      v-if="errors.panggilan"
                    >
                      {{ errors.panggilan[0] }}
                    </p>
                  </div>
                  <!-- End Nama Panggilan Input -->
                  <!-- NIK Input -->
                  <div class="relative">
                    <input
                      type="text"
                      id="hs-floating-input-email-value"
                      :class="{
                        'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                        'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                          !errors.nik,
                        'border-red-500 focus:border-red-500 focus:ring-red-500':
                          errors.nik,
                      }"
                      aria-describedby="hs-validation-name-error-helper"
                      placeholder="NIK"
                      name="nik"
                      v-model="form.nik"
                    />
                    <label
                      for="hs-floating-input-email-value"
                      class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                      >NIK</label
                    >
                    <p
                      class="text-xs ms-4 text-red-600 mt-2"
                      id="hs-validation-name-error-helper"
                      v-if="errors.nik"
                    >
                      {{ errors.nik[0] }}
                    </p>
                  </div>
                  <!-- End NIK Input -->
                  <!-- Jenis Kelamin Input -->
                  <select
                    :class="{
                      'py-3 px-4 pe-9 block w-full border rounded-lg text-smdisabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600': true,
                      'border-red-500 focus:border-red-500 focus:ring-red-500':
                        errors.jk,
                      'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                        !errors.jk,
                    }"
                    name="jk"
                    v-model="form.jk"
                  >
                    <option selected="*" value="null">
                      Pilih Jenis Kelamin
                    </option>
                    <option value="0">Laki-Laki</option>
                    <option value="1">Perempuan</option>
                  </select>
                  <p
                    class="text-xs ms-4 text-red-600 mt-2"
                    id="hs-validation-name-error-helper"
                    v-if="errors.jk"
                  >
                    {{ errors.jk[0] }}
                  </p>
                  <!-- End Jenis Kelamin Input -->
                  <!-- TTL Input -->
                  <div>
                    <div class="sm:flex rounded-lg shadow-sm">
                      <span
                        class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400"
                        >Tempat, Tanggal Lahir</span
                      >
                      <input
                        type="text"
                        name="tempat"
                        v-model="form.tempat_lahir"
                        :class="{
                          'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                          'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                            !errors.tempat,
                          'border-red-500 focus:border-red-500 focus:ring-red-500':
                            errors.tempat,
                        }"
                      />
                      <p
                        class="text-sm ms-4 text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                        v-if="errors.tempat"
                      >
                        {{ errors.tempat[0] }}
                      </p>
                      <input
                        type="date"
                        name="lahir"
                        v-model="form.tgl_lahir"
                        :class="{
                          'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                          'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                            !errors.lahir,
                          'border-red-500 focus:border-red-500 focus:ring-red-500':
                            errors.lahir,
                        }"
                      />
                      <p
                        class="text-xs ms-4 text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                        v-if="errors.lahir"
                      >
                        {{ errors.lahir[0] }}
                      </p>
                    </div>
                  </div>
                  <!-- End TTL Input -->
                  <!-- No HP Input -->
                  <div class="relative">
                    <input
                      type="text"
                      id="hs-floating-input-email-value"
                      :class="{
                        'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                        'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                          !errors.no_hp,
                        'border-red-500 focus:border-red-500 focus:ring-red-500':
                          errors.no_hp,
                      }"
                      placeholder="No HP"
                      name="noHp"
                      v-model="form.no_hp"
                    />
                    <label
                      for="hs-floating-input-email-value"
                      class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                      >No HP</label
                    >
                    <p
                      class="text-xs ms-4 text-red-600 mt-2"
                      id="hs-validation-name-error-helper"
                      v-if="errors.no_hp"
                    >
                      {{ errors.no_hp[0] }}
                    </p>
                  </div>
                  <!-- End No HP Input -->
                  <!-- Email Input -->
                  <div class="relative">
                    <input
                      type="email"
                      id="hs-floating-input-email-value"
                      :class="{
                        'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                        'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                          !errors.email,
                        'border-red-500 focus:border-red-500 focus:ring-red-500':
                          errors.email,
                      }"
                      placeholder="Email"
                      name="email"
                      v-model="form.email"
                    />
                    <label
                      for="hs-floating-input-email-value"
                      class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                      >Email</label
                    >
                    <p
                      class="text-xs ms-4 text-red-600 mt-2"
                      id="hs-validation-name-error-helper"
                      v-if="errors.email"
                    >
                      {{ errors.email[0] }}
                    </p>
                  </div>
                  <!-- End Email Input -->
                  <!-- Riwayat Penyakit Input -->
                  <div class="relative">
                    <input
                      type="text"
                      id="hs-floating-input-email-value"
                      :class="{
                        'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                        'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                          !errors.riwayat_penyakit,
                        'border-red-500 focus:border-red-500 focus:ring-red-500':
                          errors.riwayat_penyakit,
                      }"
                      placeholder="Riwayat Penyakit"
                      name="riwayatPenyakit"
                      v-model="form.riwayat_penyakit"
                    />
                    <label
                      for="hs-floating-input-email-value"
                      class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                      >Riwayat Penyakit</label
                    >
                    <p
                      class="text-xs ms-4 text-red-600 mt-2"
                      id="hs-validation-name-error-helper"
                      v-if="errors.riwayat_penyakit"
                    >
                      {{ errors.riwayat_penyakit[0] }}
                    </p>
                  </div>
                  <!-- End Riwayat Penyakit Input -->
                  <!-- Keterangan Input -->
                  <div class="relative">
                    <input
                      type="text"
                      id="hs-floating-input-email-value"
                      :class="{
                        'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                        'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                          !errors.keterangan,
                        'border-red-500 focus:border-red-500 focus:ring-red-500':
                          errors.keterangan,
                      }"
                      placeholder="Keterangan"
                      name="keterangan"
                      v-model="form.keterangan"
                    />
                    <label
                      for="hs-floating-input-email-value"
                      class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                      >Keterangan</label
                    >
                    <p
                      class="text-xs ms-4 text-red-600 mt-2"
                      id="hs-validation-name-error-helper"
                      v-if="errors.keterangan"
                    >
                      {{ errors.keterangan[0] }}
                    </p>
                  </div>
                  <!-- End Keterangan Input -->
                </div>
                <div class="max-w-md space-y-3 w-1/2">
                  <!-- Anak Ke Input -->
                  <div class="relative flex gap-3">
                    <div class="w-1/2">
                      <input
                        type="number"
                        id="hs-floating-input-email-value"
                        :class="{
                          'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                          'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                            !errors.anak_ke,
                          'border-red-500 focus:border-red-500 focus:ring-red-500':
                            errors.anak_ke,
                        }"
                        placeholder="Anak Ke"
                        name="anakKe"
                        v-model="form.anak_ke"
                      />
                      <label
                        for="hs-floating-input-email-value"
                        class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                        >Anak Ke</label
                      >
                      <p
                        class="text-xs ms-4 text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                        v-if="errors.anak_ke"
                      >
                        {{ errors.anak_ke[0] }}
                      </p>
                    </div>
                    <div class="w-1/2 relative">
                      <input
                        type="number"
                        id="hs-floating-input-email-value"
                        :class="{
                          'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                          'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                            !errors.dari,
                          'border-red-500 focus:border-red-500 focus:ring-red-500':
                            errors.dari,
                        }"
                        placeholder="Dari"
                        name="dari"
                        v-model="form.dari"
                      />
                      <label
                        for="hs-floating-input-email-value"
                        class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                        >Dari</label
                      >
                      <p
                        class="text-xs ms-4 text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                        v-if="errors.dari"
                      >
                        {{ errors.dari[0] }}
                      </p>
                    </div>
                  </div>
                  <!-- End Anak Ke Input -->
                  <!-- Alamat Input -->
                  <div class="relative">
                    <input
                      type="text"
                      id="hs-floating-input-email-value"
                      :class="{
                        'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                        'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                          !errors.alamat,
                        'border-red-500 focus:border-red-500 focus:ring-red-500':
                          errors.alamat,
                      }"
                      placeholder="Alamat"
                      name="alamat"
                      v-model="form.alamat"
                    />
                    <label
                      for="hs-floating-input-email-value"
                      class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                      >Alamat</label
                    >
                    <p
                      class="text-xs ms-4 text-red-600 mt-2"
                      id="hs-validation-name-error-helper"
                      v-if="errors.alamat"
                    >
                      {{ errors.alamat[0] }}
                    </p>
                  </div>
                  <!-- End Alamat Input -->
                  <!-- Kota Input -->
                  <div class="relative">
                    <input
                      type="text"
                      id="hs-floating-input-email-value"
                      :class="{
                        'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                        'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                          !errors.kota,
                        'border-red-500 focus:border-red-500 focus:ring-red-500':
                          errors.kota,
                      }"
                      placeholder="Kota"
                      name="kota"
                      v-model="form.kota"
                    />
                    <label
                      for="hs-floating-input-email-value"
                      class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                      >Kota</label
                    >
                    <p
                      class="text-xs ms-4 text-red-600 mt-2"
                      id="hs-validation-name-error-helper"
                      v-if="errors.kota"
                    >
                      {{ errors.kota[0] }}
                    </p>
                  </div>
                  <!-- End Kota Input -->
                  <!-- KodePos Input -->
                  <div class="relative">
                    <input
                      type="text"
                      id="hs-floating-input-email-value"
                      :class="{
                        'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                        'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                          !errors.kode_pos,
                        'border-red-500 focus:border-red-500 focus:ring-red-500':
                          errors.kode_pos,
                      }"
                      placeholder="Kode Pos"
                      name="kodePos"
                      v-model="form.kode_pos"
                    />
                    <label
                      for="hs-floating-input-email-value"
                      class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                      >Kode Pos</label
                    >
                    <p
                      class="text-xs ms-4 text-red-600 mt-2"
                      id="hs-validation-name-error-helper"
                      v-if="errors.kode_pos"
                    >
                      {{ errors.kode_pos[0] }}
                    </p>
                  </div>
                  <!-- End KodePos Input -->

                  <!-- Tb Bb Input -->
                  <div class="relative flex gap-3">
                    <div class="w-1/2">
                      <input
                        type="number"
                        id="hs-floating-input-email-value"
                        :class="{
                          'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                          'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                            !errors.tinggi,
                          'border-red-500 focus:border-red-500 focus:ring-red-500':
                            errors.tinggi,
                        }"
                        placeholder="Tinggi"
                        name="tinggi"
                        v-model="form.tinggi"
                      />
                      <label
                        for="hs-floating-input-email-value"
                        class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                        >Tinggi</label
                      >
                      <p
                        class="text-xs ms-4 text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                        v-if="errors.tinggi"
                      >
                        {{ errors.tinggi[0] }}
                      </p>
                    </div>
                    <div class="w-1/2 relative">
                      <input
                        type="number"
                        id="hs-floating-input-email-value"
                        :class="{
                          'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                          'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                            !errors.berat,
                          'border-red-500 focus:border-red-500 focus:ring-red-500':
                            errors.berat,
                        }"
                        placeholder="Berat"
                        name="berat"
                        v-model="form.berat"
                      />
                      <label
                        for="hs-floating-input-email-value"
                        class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                        >Berat</label
                      >
                      <p
                        class="text-xs ms-4 text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                        v-if="errors.berat"
                      >
                        {{ errors.berat[0] }}
                      </p>
                    </div>
                  </div>
                  <!-- End Tb Bb Input -->
                  <!-- Kamar Input -->
                  <div class="relative">
                    <input
                      type="number"
                      id="hs-floating-input-email-value"
                      :class="{
                        'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                        'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                          !errors.kamar,
                        'border-red-500 focus:border-red-500 focus:ring-red-500':
                          errors.kamar,
                      }"
                      placeholder="Kamar"
                      name="kamar"
                      v-model="form.kamar"
                    />
                    <label
                      for="hs-floating-input-email-value"
                      class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                      >Kamar</label
                    >
                    <p
                      class="text-xs ms-4 text-red-600 mt-2"
                      id="hs-validation-name-error-helper"
                      v-if="errors.kamar"
                    >
                      {{ errors.kamar[0] }}
                    </p>
                  </div>
                  <!-- End Kamar Input -->
                  <!-- Pendidikan Terakhir Input -->
                  <div class="relative">
                    <input
                      type="text"
                      id="hs-floating-input-email-value"
                      :class="{
                        'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                        'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                          !errors.pendidikan,
                        'border-red-500 focus:border-red-500 focus:ring-red-500':
                          errors.pendidikan,
                      }"
                      placeholder="Pendidikan Terakhir"
                      name="pendidikanTerakhir"
                      v-model="form.pendidikan"
                    />
                    <label
                      for="hs-floating-input-email-value"
                      class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                      >Pendidikan Terakhir</label
                    >
                    <p
                      class="text-xs ms-4 text-red-600 mt-2"
                      id="hs-validation-name-error-helper"
                      v-if="errors.pendidikan"
                    >
                      {{ errors.pendidikan[0] }}
                    </p>
                  </div>
                  <!-- End Pendidikan Terakhir Input -->
                  <!-- Tahun Masuk Input -->
                  <div class="relative">
                    <input
                      type="date"
                      id="hs-floating-input-email-value"
                      :class="{
                        'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                        'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                          !errors.tahun_masuk,
                        'border-red-500 focus:border-red-500 focus:ring-red-500':
                          errors.tahun_masuk,
                      }"
                      placeholder="Tahun Masuk"
                      name="tahunMasuk"
                      v-model="form.tahun_masuk"
                    />
                    <label
                      for="hs-floating-input-email-value"
                      class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                      >Tahun Masuk</label
                    >
                    <p
                      class="text-xs ms-4 text-red-600 mt-2"
                      id="hs-validation-name-error-helper"
                      v-if="errors.tahun_masuk"
                    >
                      {{ errors.tahun_masuk[0] }}
                    </p>
                  </div>
                  <!-- End Tahun Masuk Input -->
                  <!-- Tahun Keluar Input -->
                  <div class="relative">
                    <input
                      type="date"
                      id="hs-floating-input-email-value"
                      :class="{
                        'peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2': true,
                        'border-gray-200 focus:border-blue-500 focus:ring-blue-500':
                          !errors.tahun_keluar,
                        'border-red-500 focus:border-red-500 focus:ring-red-500':
                          errors.tahun_keluar,
                      }"
                      placeholder="Tahun Keluar"
                      name="tahunKeluar"
                      v-model="form.tahun_keluar"
                    />
                    <label
                      for="hs-floating-input-email-value"
                      class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                      >Tahun Keluar</label
                    >
                    <p
                      class="text-xs ms-4 text-red-600 mt-2"
                      id="hs-validation-name-error-helper"
                      v-if="errors.tahun_keluar"
                    >
                      {{ errors.tahun_keluar[0] }}
                    </p>
                  </div>
                  <!-- End Tahun Keluar Input -->
                  <div class="flex gap-4">
                    <button
                      type="submit"
                      class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Submit Data
                    </button>
                    <button
                      type="reset"
                      class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Reset Form
                    </button>
                    <button
                      type="reset"
                      class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      data-hs-overlay="#hs-large-modal"
                      id="btnClose"
                      @click="resetForm"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </form>
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

const users = ref([]);

import { useToast } from "vue-toastification";
import HSOverlay from "@preline/overlay";
const errors = ref([]);
const initialForm = {
  nis: null,
  nama_lengkap: "",
  panggilan: "",
  nik: "",
  jk: null,
  tempat_lahir: "",
  tgl_lahir: "",
  no_hp: "",
  email: "",
  riwayat_penyakit: "",
  keterangan: "",
  anak_ke: null,
  dari: null,
  alamat: "",
  kota: "",
  kode_pos: null,
  tinggi: null,
  berat: null,
  kamar: null,
  pendidikan: "",
  tahun_masuk: "",
  tahun_keluar: "",
};

const edited = ref(false);

const form = ref({ ...initialForm });

const toast = useToast();
const submitForm = async () => {
  await axios
    .post("/santri", form.value)
    .then((res) => {
      console.log(res);
      errors.value = [];
      form.value = { ...initialForm };
      toast.success("Berhasil menambahkan data baru!");
      const gg = new HSOverlay(document.querySelector("#hs-large-modal"));
      const btnClose = document.querySelector("#btnClose");
      btnClose.addEventListener("click", () => {
        gg.close();
      });
    })
    .catch((err) => {
      toast.error("Gagal menambahkan data baru!");
      errors.value = err.response.data.errors;
      console.log(err);
    });
};

const getdata = () => {
  axios
    .get("/santri")
    .then((res) => {
      users.value = res.data.data;
      nextTick(() => {
        $("#example").DataTable();
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const editForm = (user) => {
  const gg = new HSOverlay(document.querySelector("#hs-large-modal"));
  const editBtn = document.querySelector("#editBtn");
  edited.value = true;
  form.value = { ...user };
  editBtn.addEventListener("click", () => {
    gg.open();
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
