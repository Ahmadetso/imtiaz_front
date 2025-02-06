<script setup>
import { fetchInvoices } from '@/api/api'
import { onMounted, ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import { Form } from '@primevue/forms'
import Select from 'primevue/select'
import Paginator from 'primevue/paginator'
import { FilterMatchMode, FilterOperator } from '@primevue/core/api'
import DatePicker from 'primevue/datepicker'
import InputText from 'primevue/inputtext'
import TextInputFloatLabel from '@/components/ReusableComponents/inputs/TextInputFloatLabel.vue'
import AutoCompleteDropdown from '@/components/ReusableComponents/inputs/AutoCompleteDropdown.vue'
import DatePickerFloatLabel from '@/components/ReusableComponents/inputs/DatePickerFloatLabel.vue'

const visible = ref(false)
const invoices = ref([])
const loading = ref(true)
const meta = ref([])
const statuses = ref(['paid', 'partially_paid', 'unpaid'])
const formatStatus = status => {
  switch (status) {
    case 'paid':
      return 'مدفوع'

    case 'partially_paid':
      return 'مدفوع جزئيا'

    case 'unpaid':
      return 'غير مدفوع'
    default:
      return 'incorrect status'
  }
}
const formatDate = value => {
  return value.toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}
const getSeverity = status => {
  switch (status) {
    case 'paid':
      return 'success'

    case 'partially_paid':
      return 'warn'

    case 'unpaid':
      return 'danger'

    default:
      return null
  }
}

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  date: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
  },
  customer_name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  representative: { value: null, matchMode: FilterMatchMode.IN },
  status: { value: null, matchMode: FilterMatchMode.EQUALS },
  verified: { value: null, matchMode: FilterMatchMode.EQUALS },
})

const onPageChange = event => {
  loadInvoices(event.page + 1)
}

const loadInvoices = async (page = 1) => {
  try {
    const data = await fetchInvoices(page)
    invoices.value = data.data // User data
    meta.value = data.meta
  } catch (error) {
    console.error('Failed to load users', error)
  }
}

onMounted(() => {
  loadInvoices()
  loading.value = false
  // console.info(
  //   '%cINFO%c Invoices are being fetched correctly.',
  //   'color: white; background: #0066cc; padding: 2px 6px; border: 2px solid #003366; border-radius: 4px; font-weight: bold',
  //   'color: #0066cc; padding-left: 6px; font-weight: normal',
})
</script>
<template>
  <div class="">
    <DataTable
      :value="invoices"
      v-model:filters="filters"
      dataKey="id"
      show-gridlines
      scrollable
      scrollHeight="580px"
      removableSort
      :loading="loading"
      filterDisplay="menu"
      tableStyle="min-width: 50rem"
    >
      <template #header>
        <div class="card flex justify-center">
          <Button
            label="البحث المتقدم"
            icon="pi pi-search"
            @click="visible = true"
            :style="{ width: '50rem' }"
          />
          <Dialog v-model:visible="visible" modal :style="{ width: '58rem' }">
            <Form
              v-slot="$form"
              :initialValues
              :resolver
              @submit="onFormSubmit"
              class="flex flex-col pt-2 gap-2 justify-center w-full"
            >
              <div class="grid grid-cols-3 gap-5 p-2 size-fit">

                <AutoCompleteDropdown
                  label="العميل"
                  style="width: 17rem"
                ></AutoCompleteDropdown>
                <date-picker-float-label
                  label="من تاريخ"
                  style="width: 17rem"
                ></date-picker-float-label>
                <date-picker-float-label
                  label="إلى تاريخ"
                  style="width: 17rem"
                ></date-picker-float-label>
                <Select
                  :options="statuses"
                  placeholder="إختر عدد السطور المطلوبة"
                  showClear
                  style="width: 17rem"
                ></Select>
                <Select
                  :options="statuses"
                  placeholder="إختر حالة"
                  showClear
                  style="width: 17rem"
                ></Select>


              </div>
              <Button type="submit" label="Submit" />
            </Form>
          </Dialog>
        </div>
      </template>

      <Column filterField="customer_name" header="العميل">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <span>{{ data.customer_name }}</span>
          </div>
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            type="text"
            @input="filterCallback()"
            placeholder="Search by country"
          />
        </template>
      </Column>
      <Column
        header="التاريخ"
        filterField="date"
        field="date"
        sortable
        dataType="date"
      >
        <template #body="{ data }">
          {{ formatDate(data.date) }}
        </template>
        <template #filter="{ filterModel }">
          <DatePicker
            v-model="filterModel.value"
            dateFormat="yy/mm/dd"
            placeholder="يوم/شهر/سنة"
          />
        </template>
      </Column>
      <Column
        header="تاريخ الاستحقاق"
        filterField="date"
        field="due_date"
        sortable
        dataType="date"
      >
        <template #body="{ data }">
          {{ formatDate(data.due_date) }}
        </template>
        <template #filter="{ filterModel }">
          <DatePicker
            v-model="filterModel.value"
            dateFormat="yy/mm/dd"
            placeholder="يوم/شهر/سنة"
          />
        </template>
      </Column>
      <Column
        header="الحالة"
        field="status"
        filterField="status"
        :showFilterMatchModes="false"
      >
        <template #body="{ data }">
          <Tag
            :value="formatStatus(data.status)"
            :severity="getSeverity(data.status)"
          />
        </template>
        <template #filter="{ filterModel }">
          <Select
            v-model="filterModel.value"
            :options="statuses"
            placeholder="إختر حالة"
            showClear
          >
            <template #value="slotProps">
              <Tag
                v-if="slotProps.value"
                :value="formatStatus(slotProps.value)"
                :severity="getSeverity(slotProps.value)"
              />
            </template>
            <template #option="slotProps">
              <Tag
                :value="formatStatus(slotProps.option)"
                :severity="getSeverity(slotProps.option)"
              />
            </template>
          </Select>
        </template>
      </Column>

      <Column header="خيارات">
        <template #body>
          <Button label="عرض"></Button>
        </template>
      </Column>
    </DataTable>
    <Paginator
      :rows="meta.per_page"
      :totalRecords="meta.total"
      :first="meta.from"
      @page="onPageChange"
    />
  </div>
</template>
<!--<template>-->

<!--&lt;!&ndash;  <DataTable :data="invoices" :fields="fields">&ndash;&gt;-->

<!--&lt;!&ndash;  </DataTable>&ndash;&gt;-->
<!--  <div class="flex">-->
<!--    <h4 class="w-full my-2 text-5xl mr-2">إدارة الفواتير</h4>-->
<!--  </div>-->

<!--  <table class="min-w-full table mt-4  border-gray-200">-->
<!--    <thead class="bg-[#18181b]">-->
<!--    <tr>-->
<!--      <th  class="border border-gray-300 p-2">-->
<!--        id-->
<!--      </th><th  class="border border-gray-300 p-2">-->
<!--        id-->
<!--      </th><th  class="border border-gray-300 p-2">-->
<!--        id-->
<!--      </th><th  class="border border-gray-300 p-2">-->
<!--        id-->
<!--      </th><th  class="border border-gray-300 p-2">-->
<!--        id-->
<!--      </th>-->
<!--    </tr>-->
<!--    </thead>-->

<!--    <tbody>-->
<!--    <tr v-for="invoice in invoices.data" :key="invoice.id">-->
<!--      <td class="border border-gray-300 p-2">-->
<!--        {{ invoice.id }}-->

<!--      </td> <td class="border border-gray-300 p-2">-->
<!--        {{ invoice.customer_id }}-->

<!--      </td> <td class="border border-gray-300 p-2">-->
<!--        {{ invoice.date }}-->

<!--      </td> <td class="border border-gray-300 p-2">-->
<!--        {{ invoice.due_date }}-->

<!--      </td> <td class="border border-gray-300 p-2">-->
<!--        {{ invoice.status }}-->

<!--      </td>-->
<!--    </tr>-->
<!--    </tbody>-->
<!--  </table>-->
<!--  <hr class="border opacity-60">-->
<!--  <div class="w-full flex flex-wrap justify-between">-->
<!--    <button class="size-fit p-2"> previous</button>-->
<!--    <div class="border-t">-->
<!--      <button class="size-fit p-2"> next</button>-->
<!--      <button class="size-fit p-2"> next</button>-->
<!--      <button class="size-fit p-2"> next</button>-->
<!--      <button class="size-fit p-2"> next</button>-->

<!--    </div>-->
<!--    <button class="size-fit p-2"> next</button>-->

<!--  </div>-->

<!--</template>-->
