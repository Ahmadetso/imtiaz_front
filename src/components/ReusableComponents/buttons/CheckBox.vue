<script setup>
import { ToggleSwitch } from 'primevue'

defineProps({
  label: String,
})
</script>
<template>
  <div class="flex">
    <ToggleSwitch />
    <label
      for="default-checkbox"
      class="ms-2 text-sm font-medium text-gray-900 dark:text-DarkThemeText"
      >{{ label }}</label
    >
  </div>
</template>
<style scoped></style>
