<template>
  <div>
    <Card>
      <template #header-card> Data Santri Al-Hidayah 2 </template>
      <template #title-card>
        <div class="text-end justify-end me-5">
          <button
            type="button"
            class="py-2 px-2 inline-flex rounded-md items-center gap-x-2 text-sm font-medium border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
            @click="openModal"
          >
            <i class="bx bx-user-plus"></i> Data User
          </button>
        </div>
      </template>
      <div v-if="users.length < 1">
        <div class="flex flex-col">
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="overflow-hidden">
                <table
                  class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700"
                >
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        No
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
                        NIK
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
                        Alamat
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    class="divide-y divide-gray-200 dark:divide-neutral-700"
                  >
                    <tr class="hover:bg-slate-100">
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                      >
                        1
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                      >
                        Ahda Firly Barori
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                      >
                        3529012101050002
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                      >
                        john@site.com
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                      >
                        JL. Diponegoro 109 B, Bangselok
                      </td>
                      <td
                        class="px-6 py-4 flex gap-2 whitespace-nowrap text-center text-sm font-medium"
                      >
                        <button
                          @click="openModal"
                          type="button"
                          class="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
                        >
                          <i class="fa-regular fa-eye"></i>
                        </button>
                        <button
                          @click="openModal"
                          type="button"
                          class="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 focus:outline-none focus:bg-yellow-200 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500 dark:bg-yellow-800/30 dark:hover:bg-yellow-800/20 dark:focus:bg-yellow-800/20"
                        >
                          <i class="fa-regular fa-pen-to-square"></i>
                        </button>

                        <button
                          type="button"
                          class="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20"
                        >
                          <i class="bx bx-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr class="hover:bg-slate-100">
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                      >
                        2
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                      >
                        Hairus S.
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                      >
                        35290121010501214
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                      >
                        hairus@gmail.com
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                      >
                        Kolor, Sumenep
                      </td>
                      <td
                        class="px-6 py-4 flex gap-2 whitespace-nowrap text-center text-sm font-medium"
                      >
                        <button
                          type="button"
                          class="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
                          @click="openModal"
                        >
                          <i class="fa-regular fa-eye"></i>
                        </button>
                        <button
                          @click="openModal"
                          type="button"
                          class="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 focus:outline-none focus:bg-yellow-200 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500 dark:bg-yellow-800/30 dark:hover:bg-yellow-800/20 dark:focus:bg-yellow-800/20"
                        >
                          <i class="fa-regular fa-pen-to-square"></i>
                        </button>

                        <button
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
            </div>
          </div>
        </div>
      </div>
      <!--  -->
    </Card>
    <!-- Modal -->
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" class="relative z-100">
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
                class="w-full max-w-4xl transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-semibold leading-6 text-gray-900 mb-5"
                >
                  Input Data User
                </DialogTitle>
                <div class="mt-2">
                  <form @submit.prevent="" class="flex justify-between gap-3">
                    <!-- Sebelah Kiri -->
                    <div class="max-w-lg space-y-3 w-1/3">
                      <!-- NIS -->
                      <label
                        for="nis"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >NIS</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="nis"
                          id="nis"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan NIS"
                        />
                      </div>
                      <!-- End NIS -->
                      <!-- Nama Lengkap -->
                      <label
                        for="namaLengkap"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Nama Lengkap</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="namaLengkap"
                          id="namaLengkap"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan Nama Lengkap"
                        />
                      </div>
                      <!-- End Nama Lengkap -->
                      <!-- Nama Panggilan -->
                      <label
                        for="namaPanggilan"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Nama Panggilan</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="namaPanggilan"
                          id="namaPanggilan"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan Nama Panggilan"
                        />
                      </div>
                      <!-- End Nama Panggilan -->
                      <!-- NIK -->
                      <label
                        for="nik"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >NIK</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="nik"
                          id="nik"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan NIK"
                        />
                      </div>
                      <!-- End NIK -->
                      <!-- Jenis Kelamin -->
                      <label
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Jenis Kelamin</label
                      >
                      <select
                        class="py-2 px-2 pe-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      >
                        <option selected="">- Pilih Jenis Kelamin -</option>
                        <option value="0">Laki-Laki</option>
                        <option value="1">Perempuan</option>
                      </select>
                      <!-- End Jenis Kelamin -->
                      <!-- TTL -->
                      <div>
                        <label
                          for="tempat"
                          class="block text-sm font-medium leading-3 text-gray-900"
                          >Tempat, Tanggal Lahir</label
                        >
                        <div
                          class="sm:flex mt-3 border border-gray-200 rounded-md shadow-sm"
                        >
                          <input
                            name="tempat"
                            id="tempat"
                            type="text"
                            class="py-2 px-2 pe-1 block w-full border-gray-600 shadow-sm -ms-px first:rounded-t-sm last:rounded-b-sm sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Tempat"
                          />
                          <span
                            class="py-2 px-2 inline-flex items-center min-w-fit w-full border border-gray-200text-sm text-gray-500 -ms-px first:rounded-t-md last:rounded-b-md sm:w-auto sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400"
                            >,</span
                          >
                          <input
                            type="date"
                            class="py-2 px-2 pe-2 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-sm last:rounded-b-sm sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          />
                        </div>
                      </div>
                      <!-- End TTL -->
                      <!-- No HP -->
                      <label
                        for="noHp"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >No. HP</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="noHp"
                          id="noHp"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan No. HP"
                        />
                      </div>
                      <!-- End No HP -->
                    </div>
                    <!-- Sebelah Tengah -->
                    <div class="max-w-lg space-y-3 w-1/3">
                      <!-- Email -->
                      <label
                        for="email"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Email</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan Email"
                        />
                      </div>
                      <!-- End Email -->
                      <!-- Riwayat Penyakit -->
                      <label
                        for="riwayatPenyakit"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Riwayat Penyakit</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="riwayatPenyakit"
                          id="riwayatPenyakit"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan Riwayat Penyakit"
                        />
                      </div>
                      <!-- End Riwayat Penyakit -->
                      <!-- Alamat -->
                      <label
                        for="alamat"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Alamat</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="alamat"
                          id="alamat"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan Alamat"
                        />
                      </div>
                      <!-- End Alamat -->
                      <!-- Kota -->
                      <label
                        for="kota"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Kota</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="kota"
                          id="kota"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan Kota"
                        />
                      </div>
                      <!-- End Kota -->
                      <!-- Kode Pos -->
                      <label
                        for="kodePos"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Kode Pos</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="number"
                          name="kodePos"
                          id="kodePos"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan Kode Pos"
                        />
                      </div>
                      <!-- End Kode Pos -->
                      <!-- Berat dan Tinggi -->
                      <label
                        for="berat"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Berat dan Tinggi Badan</label
                      >
                      <div
                        class="sm:flex mt-3 border border-gray-200 rounded-md shadow-sm"
                      >
                        <input
                          id="berat"
                          name="berat"
                          type="number"
                          class="py-2 px-2 pe-1 block w-full border-gray-600 shadow-sm -ms-px first:rounded-t-sm last:rounded-b-sm sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          placeholder="Berat"
                        />
                        <span
                          class="py-2 px-2 inline-flex text-sm items-center min-w-fit w-full border border-gray-200text-sm text-gray-500 -ms-px first:rounded-t-md last:rounded-b-md sm:w-auto sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400"
                          >Kg</span
                        >
                        <input
                          type="number"
                          class="py-2 px-2 pe-2 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-sm last:rounded-b-sm sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          placeholder="Tinggi"
                        />
                        <span
                          class="py-2 px-2 inline-flex text-sm items-center min-w-fit w-full border border-gray-200text-sm text-gray-500 -ms-px first:rounded-t-md last:rounded-b-md sm:w-auto sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400"
                          >Cm</span
                        >
                      </div>
                      <!-- End Berat dan Tinggi -->
                      <!-- Pendidikan Terakhir -->
                      <label
                        for="pendidikan"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Pendidikan Terakhir</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="number"
                          name="pendidikan"
                          id="pendidikan"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan Pendidikan Terakhir"
                        />
                      </div>
                      <!-- End Pendidikan Terakhir -->
                    </div>
                    <!-- Sebelah Kanan -->
                    <div class="max-w-lg space-y-3 w-1/3">
                      <!-- Anak Ke Dari -->
                      <label
                        for="anakKe"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Anak Ke, Dari</label
                      >
                      <div
                        class="sm:flex mt-3 border border-gray-200 rounded-md shadow-sm"
                      >
                        <input
                          name="anakKe"
                          id="anakKe"
                          type="number"
                          class="py-2 px-2 pe-1 block w-full border-gray-600 shadow-sm -ms-px first:rounded-t-sm last:rounded-b-sm sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          placeholder="Anak Ke"
                        />
                        <span
                          class="py-2 px-2 inline-flex items-center min-w-fit w-full border border-gray-200text-sm text-gray-500 -ms-px first:rounded-t-md last:rounded-b-md sm:w-auto sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400"
                          >,</span
                        >
                        <input
                          type="number"
                          class="py-2 px-2 pe-2 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-sm last:rounded-b-sm sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          placeholder="Dari"
                        />
                      </div>
                      <!-- End Anak Ke Dari -->
                      <!-- Tahun Masuk -->
                      <label
                        for="tahunMasuk"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Tahun Masuk</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="date"
                          name="tahunMasuk"
                          id="tahunMasuk"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan Tahun Masuk"
                        />
                      </div>
                      <!-- End Tahun Masuk -->
                      <!-- Tahun Masuk -->
                      <label
                        for="tahunKeluar"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Tahun Keluar</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="date"
                          name="tahunKeluar"
                          id="tahunKeluar"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan Tahun Keluar"
                        />
                      </div>
                      <!-- End Tahun Keluar -->
                      <!-- Kamar -->
                      <label
                        for="kamar"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Kamar</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="kamar"
                          id="kamar"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan Kamar"
                        />
                      </div>
                      <!-- End Kamar -->
                      <!-- Keterangan -->
                      <label
                        for="keterangan"
                        class="block text-sm font-medium leading-3 text-gray-900"
                        >Keterangan</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="keterangan"
                          id="keterangan"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Masukkan Keterangan"
                        />
                      </div>
                      <!-- End Keterangan -->
                    </div>
                  </form>
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
                    type="button"
                    class="inline-flex justify-center items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    <i class="bx bx-save me-1"></i> Simpan
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
import { useHead } from "unhead";
useHead({
  title: "Users",
});

import Card from "../../components/Card.vue";
import { ref, onMounted, nextTick } from "vue";
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

const users = ref([]);
//** Modal */
const isOpen = ref(false);
function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
//** End Modal */
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
  // alert(user);
  const openBtn = new HSOverlay(document.querySelector("#modal-gg"));
  openBtn.addEventListener("click", () => {
    HSOverlay.open("#modal-edit");
    console.log("kesini");
  });
};

const showModal = () => {
  console.log("kesini");
  const openBtn = document.querySelector("#openBtn");

  openBtn.addEventListener("click", () => {
    HSOverlay.open("#modal");
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
