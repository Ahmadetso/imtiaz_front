<script setup>
import IconSales from '../icons/IconSales.vue'
import SideBarOption from './SideBarOption.vue'
import SideBarSearch from './SideBarSearch.vue'
import SideBarDropdownOption from './SideBarDropdownOption.vue'
import SideBarDropdown from './SideBarDropdown.vue'
// import IconData from '../icons/IconData.vue'
// import IconReports from '../icons/IconReports.vue'
import IconControlPanel from '../icons/IconControlPanel.vue'
// import IconTruck from '../icons/IconTruck.vue'
// import IconCostumers from '../icons/IconCostumers.vue'
// import IconBox from '../icons/IconBox.vue'
// import IconSafeBox from '../icons/IconSafeBox.vue'
// import IconMoney from '../icons/IconMoney.vue'
// import IconPeople from '../icons/IconPeople.vue'
// import IconSettings from '../icons/IconSettings.vue'

// defineProps([])
</script>
<template>
  <aside class="w-1/4 h-screen border-l border-SideBarTop bg-SideBarBlue shadow-sm flex flex-col gap-2">
    <div class="w-full h-10 bg-SideBarTop"></div>

    <SideBarSearch class="" />
    <hr class="h-[2px] w-full bg-gradient-to-l from-transparent via-SideBarTop to-trasparent border-0" />

    <SideBarOption :Icon="IconControlPanel" Name="لوحة التحكم" />
    <hr class="h-[2px] w-full bg-SideBarTop border-0" />

    <side-bar-dropdown Name="المبيعات" :Icon="IconSales">
      <SideBarDropdownOption Name="إدارة الفواتير" -quick-create="إنشاء الفواتير" -link-create="/invoice/create"
        -link="/invoice/manage" />
    </side-bar-dropdown>
  </aside>
</template>

<!--
    <side-bar-dropdown Name="المشتريات" :Icon="IconTruck">
      <side-bar-dropdown-option Name="فواتير الشراء" />
      <side-bar-dropdown-option Name="مرتجعات المشتريات" />
      <side-bar-dropdown-option Name="إشعارات مدينة" />
      <side-bar-dropdown-option Name="إدارة الموردين" />
      <side-bar-dropdown-option Name="مدفوعات الموردين" />
      <side-bar-dropdown-option Name="إعدادات فواتير الشراء" />
      <side-bar-dropdown-option Name="إعدادات الموردين" />
    </side-bar-dropdown>
    <side-bar-dropdown Name="العملاء" :Icon="IconCostumers">
      <side-bar-dropdown-option Name="ادارة العملاء" />
      <side-bar-dropdown-option Name="قائمة الاتصال" />
      <side-bar-dropdown-option Name="إعدادات العميل" />
    </side-bar-dropdown>
    <side-bar-dropdown Name="المخزون" :Icon="IconBox">
      <side-bar-dropdown-option Name="المنتجات والخدمات" />
      <side-bar-dropdown-option Name="إدارة الأذون المخزنية" />
      <side-bar-dropdown-option Name="قوائم الأسعار" />
      <side-bar-dropdown-option Name="المستودعات" />
      <side-bar-dropdown-option Name="إدارة الجرد" />
      <side-bar-dropdown-option Name="إعدادات المخزون" />
      <side-bar-dropdown-option Name="إعدادات المنتجات" />
    </side-bar-dropdown>

    <side-bar-dropdown Name="المالية" :Icon="IconSafeBox">
      <side-bar-dropdown-option Name="المصروفات" />
      <side-bar-dropdown-option Name="سندات القبض" />
      <side-bar-dropdown-option Name="خزائن وحسابات بنكية" />
      <side-bar-dropdown-option Name="إعدادات المالية" />
    </side-bar-dropdown>

    <side-bar-dropdown Name="الحسابات العامة" :Icon="IconMoney">
      <side-bar-dropdown-option -name="القيود اليومية" -quick-create="true" />
      <side-bar-dropdown-option -name="دليل الحسابات" />
      <side-bar-dropdown-option -name="مراكز التكلفة" />
      <side-bar-dropdown-option -name="الأصول" />
      <side-bar-dropdown-option -name="إعدادات الحسابات العامة" />
    </side-bar-dropdown>
    <side-bar-dropdown Name="الموظفين" :Icon="IconPeople">
      <side-bar-dropdown-option -name="إدارة الموظفين" />
      <side-bar-dropdown-option -name="إدارة ادوار الموظفين" />
      <side-bar-dropdown-option -name="الإعدادات" />
    </side-bar-dropdown>
    <side-bar-dropdown Name="التقارير" :Icon="IconData">
      <side-bar-dropdown-option -name="تقارير المبيعات" />
      <side-bar-dropdown-option -name="تقارير المشتريات" />
      <side-bar-dropdown-option -name="تقارير الحسابات العامة" />
      <side-bar-dropdown-option -name="تقارير العملاء" />
      <side-bar-dropdown-option -name="تقارير المخزون" />
      <side-bar-dropdown-option -name="سجل نشاطات الحساب" />
    </side-bar-dropdown>
    <side-bar-dropdown Name="القوالب" :Icon="IconReports">
      <side-bar-dropdown-option -name="قوالب للطباعة" />
      <side-bar-dropdown-option -name="قوالب الفواتير الجاهزة" />
      <side-bar-dropdown-option -name="قوالب البريد الالكتروني " />
      <side-bar-dropdown-option -name="الشروط والاحكام" />
      <side-bar-dropdown-option -name="ادارة الملفات والمستندات" />
      <side-bar-dropdown-option -name="قواعد الارسال الالي" />
    </side-bar-dropdown>
    <side-bar-dropdown Name="الإعدادات" :Icon="IconSettings">
      <side-bar-dropdown-option -name="معلومات الحساب" />
      <side-bar-dropdown-option -name="إعدادات الحساب" />
      <side-bar-dropdown-option -name="طرق الدفع" />
      <side-bar-dropdown-option -name="إعدادات الترقيم المتسلسل" />
      <side-bar-dropdown-option -name="إعدادات الضرائب" />
      <side-bar-dropdown-option -name="إدارة التطبيقات" />
      <side-bar-dropdown-option -name="تخصيص التطبيق" />
    </side-bar-dropdown> -->
