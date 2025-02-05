<script setup>
import { FloatLabel } from 'primevue'
import InputNumber from 'primevue/inputnumber'

defineProps({
  label: String,
})
</script>
<template>
  <FloatLabel variant="on">
    <InputNumber inputId="integeronly" fluid />
    <label for="on_label">{{ label }}</label>
  </FloatLabel>
</template>
