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
    <table class="bg-white dark:bg-SideBarBlue border flex">
      <tbody class="text-black dark:text-DarkThemeText flex flex-col">
        <tr class="border">
          <ButtonIcon
            :icon="IconPlus"
            class="h-[57px] w-[57px] flex items-center justify-center"
            style="border-radius: 0px 3px 0px 0px"
          />
        </tr>
        <tr class="border">
          <ButtonIcon
            :icon="IconMinus"
            class="h-[57px] w-[57px] flex items-center justify-center"
            style="border-radius: 0px"
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
            <dropdown-input label="اختر منتجاً*" class="h-[57px]" />
          </td>
          <td class="border-b border-blue-gray-50">
            <text-input label="اضف وصفا" class="h-[57px]" />
          </td>
          <td class="border-b border-blue-gray-50">
            <NumbersInput label="الكمية*" class="h-[57px] w-20" />
          </td>
          <td class="border-b border-blue-gray-50">
            <NumbersInput label="السعر*" class="h-[57px] w-20" />
          </td>
          <td class="border-b border-blue-gray-50">
            <a
              href="#"
              class="h-[57px] flex items-center justify-center text-sm font-medium"
            >
              Edit
            </a>
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
