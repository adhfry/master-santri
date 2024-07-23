<template>
  <div
    class="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
  >
    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
      <slot name="header-card"></slot>
    </h3>
    <p
      class="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500"
    >
      <slot name="title-card"></slot>
    </p>

    <div class="mt-4 text-gray-500 dark:text-neutral-400 mx-4">
      <slot />
    </div>
  </div>
</template>
