<template>
  <div>
    <section-header>СПИСОК НЕ ОБРАБОТАННЫХ ЗАЯВОК</section-header>
    <div
      v-for="item in UInvoice"
    >
      <invoice-item-list
          :id="item.id"
          :date="item.date"
          :organization="item.organization"
          :email="item.email"
          :inn="item.inn"
          :addr="item.addr"
          :manager="item.manager"
          :tel="item.tel"
      ></invoice-item-list>
    </div>
  </div>
</template>

<script setup>
import InvoiceItemList from "~/components/invoice/InvoiceItemList.vue";
import SectionHeader from "~/components/other/SectionHeader.vue";
import {useUnprocessedInvoice} from "~/store/UnprocessedInvoice";

const UInvoice = useUnprocessedInvoice().UnprocessedInvoice

</script>

<style scoped>
</style>