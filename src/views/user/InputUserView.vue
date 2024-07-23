<template>
  <div>
    <Card>
      <template #header-card> Input Data User </template>
      <template #title-card> Silahkan Inputkan data pengguna </template>
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
            <option selected="*" value="null">Pilih Jenis Kelamin</option>
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
                v-model="form.tempat"
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
                v-model="form.lahir"
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
          </div>
        </div>

        <!-- ada perubahan disini -->
      </form>
    </Card>
  </div>
</template>

<script setup>
import Card from "../../components/Card.vue";
import { ref } from "vue";
import axios from "@/plugins/axios";
import { useToast } from "vue-toastification";
const errors = ref([]);
const initialForm = {
  nis: null,
  nama_lengkap: "",
  panggilan: "",
  nik: "",
  jk: null,
  tempat: "",
  lahir: "",
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
    })
    .catch((err) => {
      toast.error("Gagal menambahkan data baru!");
      errors.value = err.response.data.errors;
      console.log(err);
    });
};
</script>
