<script setup>
import DatePicker from 'primevue/datepicker'
import FloatLabel from 'primevue/floatlabel'

defineProps({
  label: String,
})
</script>
<template>
  <div class="flex items-center">
    <FloatLabel variant="on">
      <DatePicker inputId="on_label" showIcon dateFormat="yy/mm/dd" iconDisplay="input" />
      <label for="on_label">{{ label }}</label>
    </FloatLabel>
  </div>
</template>
