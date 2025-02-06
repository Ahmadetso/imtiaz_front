<script setup>
import NumbersInput from './inputs/NumbersInput.vue'
import TextInput from './inputs/TextInputWithFloatLabel.vue'
import DropdownInput from './inputs/DropdownInput.vue'
import ButtonIcon from './buttons/ButtonIcon.vue'
import IconPlus from '../icons/IconPlus.vue'
import IconMinus from '../icons/IconMinus.vue'
</script>
<template>
  <div class="overflow-x-auto sm:rounded-lg sm:rounded-b-none flex border">
    <table class="bg-white dark:bg-SideBarBlue border flex items-start">
      <tbody class="text-black dark:text-DarkThemeText">
        <tr class="border">
          <ButtonIcon
            :icon="IconPlus"
            class="h-full"
            style="border-radius: 0px 3px 0px 0px"
          />
        </tr>

        <tr class="border">
          <ButtonIcon
            :icon="IconMinus"
            class="h-full"
            style="border-radius: 0px 0px 0px 0px"
          />
        </tr>
      </tbody>
    </table>

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
        </tr>
      </tbody>
    </table>
  </div>
  <div class="bg-[#1C1C1E] p-4 rounded-lg w-[300px] text-right">
    <div class="flex justify-between items-center mb-3 text-gray-300">
      <span class="text-sm">الضريبة</span>
      <span class="font-medium">15%</span>
    </div>
    <div class="flex justify-between items-center mb-3 text-gray-300">
      <span class="text-sm">المجموع</span>
      <span class="font-medium">1,000 ريال</span>
    </div>
    <div
      class="flex justify-between items-center pt-3 border-t border-gray-700 text-[#5CD5F1]"
    >
      <span class="text-sm">المجموع النهائي</span>
      <span class="font-medium">1,150 ريال</span>
    </div>
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
