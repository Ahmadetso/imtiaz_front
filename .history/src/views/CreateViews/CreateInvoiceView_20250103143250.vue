<script setup>
import DatePickerFloatLabel from '@/components/ReusableComponents/inputs/DatePickerFloatLabel.vue'
import DropdownInput from '@/components/ReusableComponents/inputs/DropdownInput.vue'
import DropdownInputOption from '@/components/ReusableComponents/inputs/DropdownInputOption.vue'
import ItemsCreationTable from '@/components/ReusableComponents/ItemsCreationTable.vue'
import TextArea from '@/components/ReusableComponents/inputs/TextArea.vue'
import CheckBox from '@/components/ReusableComponents/buttons/CheckBox.vue'
import IconSave from '@/components/icons/IconSave.vue'
import ButtonIcon from '@/components/ReusableComponents/buttons/ButtonIcon.vue'
import IconPrinter from '@/components/icons/IconPrinter.vue'
</script>

<template>
  <div class="flex">
    <h4 class="w-full text-5xl mt-3">إنشاء الفواتير</h4>
    <h4 class="w-full text-6xl mt-2" dir="ltr">INV-0001</h4>
  </div>

  <hr class="w-full my-2" />
  <div class="mt-2 grid grid-cols-4 w-full gap-4 md:h-12">
    <dropdown-input class="h-full">
      <dropdown-input-option name="الشُميخ المُليخ" />
    </dropdown-input>
    <date-picker-float-label title="تاريخ الفاتورة" />

    <date-picker-float-label title="تاريخ ألإستحقاق" />
    <dropdown-input>
      <dropdown-input-option name="SAR" />
    </dropdown-input>
  </div>
  <hr class="w-full my-2" />

  <items-creation-table />
  <text-area />
  <hr class="w-full my-2" />
  <div class="h-10 flex justify-around items-center border p-2 w-full bg-white">
    <CheckBox title="مدفوع بالكامل" />
    <CheckBox title="أدرج عنوان العميل" />
    <CheckBox title="أدرج عنوان الشحن" />
  </div>
  <hr class="w-full my-2" />
  <div class="h-20 border p-2 w-full bg-white flex">
    <button-icon title="إحفظ وإطبع" type="submit" :icon="IconPrinter" />
    <button-icon title="إحفظ بدون طباعة" type="submit" :icon="IconSave" />
  </div>
</template>
