<script setup>
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'

const model = defineModel()
defineProps({
  label: String,
})
</script>

<template>
  <FloatLabel variant="on">
    <InputText id="on_label" type="text" v-model="model" />
    <label for="on_label">{{ label }}</label>
  </FloatLabel>
</template>
