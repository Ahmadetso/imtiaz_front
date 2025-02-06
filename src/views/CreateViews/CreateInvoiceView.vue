<script setup>
import DatePickerFloatLabel from '@/components/ReusableComponents/inputs/DatePickerFloatLabel.vue'
import TextArea from '@/components/ReusableComponents/inputs/TextArea.vue'
import CheckBox from '@/components/ReusableComponents/buttons/CheckBox.vue'
import NumbersInput from '@/components/ReusableComponents/inputs/NumbersInput.vue'
import TextInputWithFloatLabel from '@/components/ReusableComponents/inputs/TextInputFloatLabel.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconDelete from '@/components/icons/IconDelete.vue'
import PrimaryButton from '@/components/ReusableComponents/buttons/PrimaryButton.vue'
import ButtonIcon from '@/components/ReusableComponents/buttons/ButtonIcon.vue'
import AutoCompleteDropdown from '@/components/ReusableComponents/inputs/AutoCompleteDropdown.vue'
import IconSave from '@/components/icons/IconSave.vue'
import IconPrinter from '@/components/icons/IconPrinter.vue'
import { ref, computed, onMounted } from 'vue'
import { fetchInvoices } from '@/api/api'

const invoices = ref(null)

const model = ref('')

onMounted(async () => {
  const response = await fetchInvoices()
  invoices.value = response.data
  console.log(invoices)
})
const customers = computed(() => invoices.value?.customers || [])
</script>
<template>
  <div class="grid size-full bg-white dark:bg-SideBarBlue">
    <div class="flex">
      <h4 class="w-full text-5xl mt-3">إنشاء الفواتير</h4>
      <h4 class="w-full text-6xl mt-2" dir="ltr">INV-0001</h4>
    </div>

    <hr class="border-2" />
    <div class="flex justify-evenly">
   
      <date-picker-float-label label="تاريخ الفاتورة*" />

      <date-picker-float-label label="تاريخ ألإستحقاق*" />
      <AutoCompleteDropdown
        class="h-full mx-2"
        label="العملة*"
        v-model="model"
        :items="customers"
      />
    </div>
    <hr class="border-2 my-2" />

    <div class="overflow-x-auto sm:rounded-lg sm:rounded-b-none border-t">
      <table class="w-full rtl:text-right text-left min-w-max">
        <thead>
          <tr class="divide-x">
            <th
              class="p-4 border-b border-l border-blue-gray-100 border-r bg-blue-gray-50"
            >
              <p class="block text-sm font-normal opacity-70">المنتج*</p>
            </th>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p class="block text-sm font-normal opacity-70">الوصف</p>
            </th>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p class="block text-sm font-normal opacity-70">الكمية*</p>
            </th>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p class="block text-sm font-normal opacity-70">سعر الوحدة*</p>
            </th>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p class="block text-sm font-normal opacity-70">الاجمالي</p>
            </th>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p class="block text-sm font-normal opacity-70">اجراء</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="divide-x divide-DarkThemeText">
            <td class="border border-blue-gray-50">
              <AutoCompleteDropdown
                class="h-full mx-2"
                label="اختر منتجا*"
                v-model="model"
                :items="customers"
              />
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <text-input-with-float-label class="" label="اضف وصفا" />
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <NumbersInput label="الكمية*" class="w-20" />
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <NumbersInput label="السعر*" class="w-20" />
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <a href="#" class="block text-sm font-medium leading-normal">
                Edit
              </a>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <ButtonIcon :icon="IconDelete" />
            </td>
          </tr>
        </tbody>
      </table>
      <div dir="ltr">
        <primary-button
          dir="ltr"
          label="بند"
          style="border-radius: 0px 0px 3px 3px"
          :icon="IconPlus"
          class="h-10 w-[90px]"
        />
      </div>
    </div>

    <hr class="w-full border-2 my-2" />
    <div class="flex">
      <div
        class="h-full grid grid-cols-2 gap-2 justify-start items-start px-2 flex-1 bg-white dark:bg-SideBarBlue"
      >
        <numbers-input label="المبلغ المخصوم" class="" />
        <numbers-input label="المبلغ المدفوع" />
        <CheckBox label="مدفوع بالكامل" />
        <CheckBox label="أدرج عنوان العميل" />
        <CheckBox label="أدرج عنوان الشحن" />
        <CheckBox label="دفع عن طريق البنك" />
      </div>

      <text-area class="flex-1" />
      <div class="bg-SideBarBlue p-4 rounded-lg w-[300px] flex-1 text-right">
        <div class="flex justify-between items-center mb-3 text-gray-300">
          <span class="text-sm">الضريبة</span>
          <span class="font-medium">15%</span>
        </div>
        <div class="flex justify-between items-center mb-3 text-gray-300">
          <span class="text-sm">المجموع</span>
          <span class="font-medium">1,000 ريال</span>
        </div>
        <div
          class="flex justify-between items-center pt-3 border-t border-gray-700 text-SideBarTop"
        >
          <span class="text-sm">المجموع النهائي</span>
          <span class="font-medium">1,150 ريال</span>
        </div>
      </div>
    </div>
    <hr class="border-2 my-2" />

    <div class="h-20 p-2 w-full bg-white dark:bg-SideBarBlue flex" dir="ltr">
      <PrimaryButton
        label="إحفظ وإطبع"
        class="mx-1 w-full"
        type="submit"
        :icon="IconPrinter"
      />
      <PrimaryButton
        label="إحفظ بدون طباعة"
        type="submit"
        :icon="IconSave"
        class="mx-1 w-full"
      />
    </div>
  </div>
</template>
