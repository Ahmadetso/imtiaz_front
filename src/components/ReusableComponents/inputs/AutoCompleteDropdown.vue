<script setup>
import FloatLabel from 'primevue/floatlabel'
import AutoComplete from 'primevue/autocomplete'
import { ref } from 'vue'

const props = defineProps({
  label: String,
  items: {
    type: Array,
    required: true,
  },
})

const model = defineModel()
const filteredItems = ref([])

const search = event => {
  setTimeout(() => {
    if (!event.query.trim().length) {
      filteredItems.value = props.items
    } else {
      filteredItems.value = props.items.filter(item => {
        return item?.name?.toLowerCase().startsWith(event.query.toLowerCase())
      })
    }
  }, 500)
}
</script>

<template>
  <div class="card flex w-full items-center justify-center">
    <FloatLabel variant="on">
      <AutoComplete
        v-model="model"
        optionLabel="name"
        inputId="dropdown"
        dropdown
        :suggestions="filteredItems"
        @complete="search"
      />
      <label for="dropdown">{{ label }}</label>
    </FloatLabel>
  </div>
</template>

<style scoped></style>
