<script setup>
import NumbersInput from './inputs/NumbersInput.vue'
import TextInput from './inputs/TextInputWithFloatLabel.vue'
import DropdownInput from './inputs/DropdownInput.vue'
import IconMinus from '../icons/IconMinus.vue'
import IconPlus from '../icons/IconPlus.vue'
</script>
<template>
  <div class="relative grid shadow-md grid-cols-1">
    <div class="overflow-x-auto sm:rounded-lg sm:rounded-b-none border">
      <table class="w-full rtl:text-right text-left table-auto min-w-max">
        <thead>
          <tr class="divide-x">
            <th class="p-4 border-b border-l hover:bg-DarkThemeHover">
              <button
                class="flex font-sans gap-2 text-sm antialiased font-normal leading-none opacity-70 size-full"
              >
                <span>أضف سطراً جديداً</span><IconPlus class="size-4" />
              </button>
            </th>
            <th
              class="p-4 border-b border-l border-blue-gray-100 bg-blue-gray-50"
            >
              <p
                class="block font-sans text-sm antialiased font-normal leading-none opacity-70"
              >
                المنتج
              </p>
            </th>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p
                class="block font-sans text-sm antialiased font-normal leading-none opacity-70"
              >
                الوصف
              </p>
            </th>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p
                class="block font-sans text-sm antialiased font-normal leading-none opacity-70"
              >
                الكمية
              </p>
            </th>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p
                class="block font-sans text-sm antialiased font-normal leading-none opacity-70"
              >
                سعر الوحدة
              </p>
            </th>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p
                class="block font-sans text-sm antialiased font-normal leading-none opacity-70"
              >
                الاجمالي
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="divide-x divide-DarkThemeText">
            <td
              class="border-b border-l border-blue-gray-50 hover:bg-DarkThemeHover"
              dir="ltr"
            >
              <button
                class="flex place-content-center font-sans text-sm antialiased font-normal leading-none opacity-70 size-full"
              >
                <IconMinus class="mx-2" /><span>إحذف هذا السطر</span>
              </button>
            </td>
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
              <a
                href="#"
                class="block font-sans text-sm antialiased font-medium leading-normal"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr class="">
            <td class="pt-3 px-2">
              <p
                class="block font-sans text-xl antialiased font-normal leading-none opacity-70"
              >
                المجموع:
              </p>
            </td>
            <td class="pt-3 px-2">
              <p
                class="block font-sans text-xl antialiased font-normal leading-none opacity-70"
              >
                الضريبة:
              </p>
            </td>
            <td class="pt-3 px-2">
              <p
                class="block font-sans text-xl antialiased font-normal leading-none opacity-70"
              >
                المجموع بعد الضريبة:
              </p>
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
/* input[type='number'] {
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  appearance: textfield;
} */
</style>
