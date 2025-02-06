<script setup>
import DatePickerFloatLabel from '@/components/ReusableComponents/inputs/DatePickerFloatLabel.vue'
import DropdownInput from '@/components/ReusableComponents/inputs/DropdownInput.vue'
import ItemsCreationTable from '@/components/ReusableComponents/ItemsCreationTable.vue'
import TextArea from '@/components/ReusableComponents/inputs/TextArea.vue'
import CheckBox from '@/components/ReusableComponents/buttons/CheckBox.vue'
import IconSave from '@/components/icons/IconSave.vue'
import NumbersInput from '@/components/ReusableComponents/inputs/NumbersInput.vue'
import PrimaryButton from '@/components/ReusableComponents/buttons/PrimaryButton.vue'
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
      <dropdown-input class="h-full mx-2" label="العميل*" />
      <date-picker-float-label label="تاريخ الفاتورة*" />

      <date-picker-float-label label="تاريخ ألإستحقاق*" />
      <dropdown-input label="العملة*"> </dropdown-input>
    </div>
    <hr class="border-2 my-2" />

    <items-creation-table />
    <div class="flex">
      <div
        class="h-full grid grid-cols-2 gap-2 justify-start items-start px-2 w-full bg-white dark:bg-SideBarBlue"
      >
        <numbers-input label="المبلغ المخصوم" class="" />
        <numbers-input label="المبلغ المدفوع" />
        <CheckBox label="مدفوع بالكامل" />
        <CheckBox label="أدرج عنوان العميل" />
        <CheckBox label="أدرج عنوان الشحن" />
        <CheckBox label="دفع عن طريق البنك" />
      </div>
      <div>
        <text-area />
      </div>
    </div>
    <hr class="border-2 my-2" />

    <div class="h-20 p-2 w-full bg-white dark:bg-SideBarBlue flex" dir="ltr">
      <PrimaryButton
        label="إحفظ وإطبع"
        class="mx-1"
        type="submit"
        :icon="IconPrinter"
      />
      <PrimaryButton
        label="إحفظ بدون طباعة"
        type="submit"
        :icon="IconSave"
        class="mx-1"
      />
    </div>
  </div>
</template>
