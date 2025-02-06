<script setup>
import DatePickerFloatLabel from '@/components/ReusableComponents/inputs/DatePickerFloatLabel.vue'
import DropdownInput from '@/components/ReusableComponents/inputs/DropdownInput.vue'
import ItemsCreationTable from '@/components/ReusableComponents/ItemsCreationTable.vue'
import TextArea from '@/components/ReusableComponents/inputs/TextArea.vue'
import CheckBox from '@/components/ReusableComponents/buttons/CheckBox.vue'
import IconSave from '@/components/icons/IconSave.vue'
import NumbersInput from '@/components/ReusableComponents/inputs/NumbersInput.vue'
import ButtonIcon from '@/components/ReusableComponents/buttons/ButtonIcon.vue'
import IconPrinter from '@/components/icons/IconPrinter.vue'
</script>

<template>
  <div class="grid size-full px-10 bg-white dark:bg-SideBarBlue">
    <div class="flex">
      <h4 class="w-full text-5xl mt-3">إنشاء الفواتير</h4>
      <h4 class="w-full text-6xl mt-2" dir="ltr">INV-0001</h4>
    </div>

    <hr class="border-2" />
    <div class="flex justify-evenly">
      <dropdown-input class="h-full mx-2" label="العميل" />
      <date-picker-float-label label="تاريخ الفاتورة" />

      <date-picker-float-label label="تاريخ ألإستحقاق" />
      <dropdown-input label="العملة"> </dropdown-input>
    </div>
    <hr class="border-2 my-2" />

    <items-creation-table />
    <div class="flex">
      <div
        class="h-full grid grid-cols-2 gap-2 justify-start items-center w-full bg-white dark:bg-SideBarBlue"
      >
        <numbers-input label="المبلغ المخصوم" class="" />
        <numbers-input label="المبلغ المدفوع" />
        <CheckBox label="مدفوع بالكامل" />
        <CheckBox label="أدرج عنوان العميل" />
        <CheckBox label="أدرج عنوان الشحن" />
      </div>
      <div>
        <text-area />
      </div>
    </div>
    <hr class="w-full my-2" />

    <hr class="w-full my-2" />
    <div class="h-20 border p-2 w-full bg-white dark:bg-SideBarBlue flex">
      <button-icon label="إحفظ وإطبع" type="submit" :icon="IconPrinter" />
      <button-icon label="إحفظ بدون طباعة" type="submit" :icon="IconSave" />
    </div>
  </div>
</template>
