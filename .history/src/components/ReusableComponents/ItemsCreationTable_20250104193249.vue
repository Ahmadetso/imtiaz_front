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
          <ButtonIcon :icon="IconPlus" style="border-radius: 0px 3px 0px 0px" />
        </tr>

        <tr class="border">
          <ButtonIcon
            :icon="IconMinus"
            class="h-20"
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
            <text-input label="اضف وصفا" />
          </td>
          <td class="p-4 border-b border-blue-gray-50">
            <NumbersInput label="الكمية" class="w-16" />
          </td>
          <td class="p-4 border-b border-blue-gray-50">
            <NumbersInput label="السعر" class="w-16" />
          </td>
          <td class="p-4 border-b border-blue-gray-50">
            <a href="#" class="block text-sm font-medium leading-normal">
              Edit
            </a>
          </td>
        </tr>
        <tr class="">
          <td class="pt-3 px-2">
            <p class="block text-xl font-normal opacity-70">المجموع:</p>
          </td>
          <td class="pt-3 px-2">
            <p class="block text-xl font-normal opacity-70">الضريبة:</p>
          </td>
          <td class="pt-3 px-2">
            <p class="block text-xl font-normal opacity-70">
              المجموع بعد الضريبة:
            </p>
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
