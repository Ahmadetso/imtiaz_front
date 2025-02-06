<script setup>
import { ref, onMounted } from 'vue'
import { DataTable, Column } from 'primevue'
import { fetchInvoices } from '@/api/api'
import { FilterMatchMode } from '@primevue/core/api'
import TextInputWithFloatLabel from '@/components/ReusableComponents/inputs/TextInputFloatLabel.vue'
import PrimaryButton from '@/components/ReusableComponents/buttons/PrimaryButton.vue'

import FloatLabel from 'primevue'
import InputText from 'primevue'

const invoices = ref([])

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
})
const statusTranslations = {
  paid: 'مدفوع',
  unpaid: 'غير مدفوع',
  partially_paid: 'مدفوع جزئياً',
}

onMounted(async () => {
  try {
    const response = await fetchInvoices()
    invoices.value = response.data.data
  } catch (error) {
    console.error('Error fetching invoices:', error)
  }
})
</script>
<template>
  <div class="grid p-16">
    <DataTable
      :filters="filters"
      :value="invoices"
      paginator
      removableSort
      :rows="7"
      filterDisplay="row"
    >
      <template #header>
        <FloatLabel variant="on">
          <InputText id="on_label" v-model="value3" />
          <label for="on_label">On Label</label> </FloatLabel
        ><text-input-with-float-label v-model="filters['global'].value" label="Search"
      /></template>
      <Column field="id" header="رمز التعريف">
        <template #body="slotProps"
          >INV-{{ slotProps.data.id.toString().padStart(5, '0') }}</template
        >
      </Column>
      <Column field="customer_name" header="العميل"></Column>
      <Column field="status" sortable header="الحالة">
        <template #body="slotProps">
          <span
            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
            :class="{
              'bg-green-100 text-green-800': slotProps.data.status === 'paid',
              'bg-red-100 text-red-800': slotProps.data.status === 'unpaid',
              'bg-yellow-100 text-yellow-800':
                slotProps.data.status === 'partially_paid',
            }"
          >
            {{ statusTranslations[slotProps.data.status] }}
          </span>
        </template>
      </Column>
      <Column field="date" sortable header="التاريخ"></Column>
      <Column field="due_date" sortable header="تاريخ الاستحقاق"></Column>
      <Column field="null" header="إجراء">
        <template #body>
          <primary-button label="عرض" /> <primary-button label="تعديل" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped>
.p-datatable {
  --p-datatable-row-background: #1c1b22;
}
</style>
