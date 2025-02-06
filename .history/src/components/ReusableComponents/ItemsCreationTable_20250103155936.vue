<script setup>
import NumbersInput from './inputs/NumbersInput.vue'
import TextInput from './inputs/TextInputFloatLabel.vue'
import DropdownInput from './inputs/DropdownInput.vue'
import AddButton from './buttons/AddButton.vue'
</script>
<template>
  <div class="relative grid shadow-md grid-cols-1">
    <div class="overflow-x-auto sm:rounded-lg sm:rounded-b-none border">
      <table class="w-full rtl:text-right text-left table-auto min-w-max">
        <thead>
          <tr class="divide-x">
            <th
              class="p-4 border-b border-x border-blue-gray-100 bg-blue-gray-50"
            >
              <p
                class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"
              >
                المنتج\ات
              </p>
            </th>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p
                class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"
              >
                الوصف
              </p>
            </th>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p
                class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"
              >
                الكمية
              </p>
            </th>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p
                class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"
              >
                سعر الوحدة
              </p>
            </th>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p
                class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"
              >
                الاجمالي
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="divide-y divide-DarkThemeText">
            <td class="p-4 border-b border-blue-gray-50">
              <p
                class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
              >
                Laurent Perrier
              </p>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <p
                class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
              >
                Laurent Perrier
              </p>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <p
                class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
              >
                Executive
              </p>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <p
                class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
              >
                19/09/17
              </p>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <a
                href="#"
                class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <div class="relative size-full flex justify-between">
      <div class="size-auto p-2 bg-white dark:bg-SideBarBlue">
        <add-button class="size-12" />
      </div>

      <numbers-input placeholder="المبلغ المدفوع" class="m-2" />
      <numbers-input placeholder="المبلغ المخصوم" class="m-2" />

      <table class="bg-white dark:bg-SideBarBlue border flex items-start">
        <tbody class="text-black dark:text-DarkThemeText">
          <tr class="border-b-[1px]">
            <th class="px-8">الضريبة:</th>
            <td class="px-9 pt-1">2</td>
          </tr>

          <tr class="border-b-[1px]">
            <th class="px-8">الاجمالي:</th>
            <td class="px-9 pt-1">2</td>
          </tr>
          <tr>
            <th class="px-8 inline-flex">الاجمالي بعد الضريبة:</th>
            <td class="px-9 pt-1">2</td>
          </tr>
        </tbody>
      </table>
    </div> -->
    <!-- <div class="h-24 border-t-[1px] border-b-0 p-2 w-full bg-white"></div> -->
  </div>
  <hr class="w-full border-2 my-2" />
</template>

<style>
input[type='number'] {
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  appearance: textfield;
}
</style>
