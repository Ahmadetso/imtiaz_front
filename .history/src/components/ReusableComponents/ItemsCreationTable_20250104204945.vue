<script setup>
import NumbersInput from './inputs/NumbersInput.vue'
import TextInput from './inputs/TextInputFloatLabel.vue'
import DropdownInput from './inputs/DropdownInput.vue'
import PrimaryButton from './buttons/PrimaryButton.vue'
import IconArrowDown from '../icons/IconArrowDown.vue'
import IconDelete from '../icons/IconDelete.vue'
</script>
<template>
  <div class="overflow-x-auto sm:rounded-lg sm:rounded-b-none flex border">
    <!-- <table class="bg-white dark:bg-SideBarBlue border flex items-start">
      <tbody class="text-black h-full dark:text-DarkThemeText">
        <tr class="border h-full">
          <ButtonIcon
            :icon="IconPlus"
            class="h-[68px]"
            style="border-radius: 0px 3px 0px 0px"
          />
        </tr>

        <tr class="border h-full">
          <ButtonIcon
            :icon="IconMinus"
            class="h-20"
            style="border-radius: 0px"
          />
        </tr>
      </tbody>
    </table> -->

    <table class="w-full rtl:text-right text-left min-w-max">
      <thead>
        <tr class="divide-x">
          <th
            class="p-4 border-b border-l border-blue-gray-100 bg-blue-gray-50"
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
          <td class="border-b border-l border-blue-gray-50">
            <dropdown-input label="اختر منتجاً*" />
          </td>
          <td class="p-4 border-b border-blue-gray-50">
            <text-input class="" label="اضف وصفا" />
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
            <div class="flex">
              <PrimaryButton label="أضف" :icon="IconArrowDown" />
              <PrimaryButton label="إحذف" :icon="IconTrash" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <hr class="w-full border-2 my-2" />
</template>

<style>
/* input[type='number'] {
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  appearance: textfield;
} */
</style>
