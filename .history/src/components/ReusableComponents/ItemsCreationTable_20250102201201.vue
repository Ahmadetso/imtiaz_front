<script setup>
import NumbersInput from './inputs/NumbersInput.vue'
import TextInput from './inputs/TextInputWithFloatLabel.vue'
import DropdownInput from './inputs/DropdownInput.vue'
import AddButton from './buttons/AddButton.vue'
</script>
<template>
  <div class="relative grid shadow-md grid-cols-1">
    <div class="overflow-x-auto sm:rounded-lg sm:rounded-b-none">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-4 py-2">المنتج</th>
            <th scope="col" class="px-4 py-2">الوصف</th>
            <th scope="col" class="px-4 py-2">
              <div class="flex items-center">السعر</div>
            </th>
            <th scope="col" class="px-4 py-2">
              <div class="flex items-center">الكمية</div>
            </th>
            <th scope="col" class="px-4 py-2">
              <div class="flex items-center">الضريبة</div>
            </th>
            <th scope="col" class="px-4 py-2">
              <div class="flex items-center">المجموع</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b">
            <td class="px-6 py-4 h-20 w-64">
              <dropdown-input class="h-full w-full"> </dropdown-input>
            </td>
            <td class="px-6 py-4 h-20"><text-input class="h-full" /></td>

            <td class="px-6 py-4 h-20 w-16">
              <numbers-input class="h-full w-16" />
            </td>
            <td class="px-6 py-4 h-20 w-16">
              <NumbersInput class="h-full w-16" />
            </td>
            <td class="px-6 py-4 h-20 w-32">
              <dropdown-input class="size-full"></dropdown-input>
            </td>

            <td class="px-6 py-4 h-20 text-right">999</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="relative border size-full flex justify-between">
      <div class="size-auto p-2 bg-white">
        <add-button class="size-12" />
      </div>

      <numbers-input placeholder="المبلغ المدفوع" class="m-2" />
      <numbers-input placeholder="المبلغ المخصوم" class="m-2" />

      <table class="bg-white flex items-start">
        <tbody>
          <tr class="border-b-[1px]">
            <th class="px-8">الضريبة:</th>
            <td class="px-9 pt-1">2</td>
          </tr>

          <tr class="border-b-[1px]">
            <th class="px-8">الاجمالي:</th>
            <td class="px-9 pt-1">2</td>
          </tr>
          <tr>
            <th class="px-8">الاجمالي بعد الضريبة:</th>
            <td class="px-9 pt-1">2</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <div class="h-24 border-t-[1px] border-b-0 p-2 w-full bg-white"></div> -->
  </div>
  <hr class="w-full my-2" />
</template>

<style>
input[type='number'] {
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  appearance: textfield;
}
</style>
