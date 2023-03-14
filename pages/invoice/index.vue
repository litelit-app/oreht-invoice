<template>
  <div>
    <other-header>СПИСОК НЕ ОБРАБОТАННЫХ ЗАЯВОК</other-header>
    <div
        v-if="isClient"
        v-for="item in UInvoice"
    >
      <invoice-list-item
          :id="item.id"
          :date="item.date"
          :organization="item.organization"
          :email="item.email"
          :inn="item.inn"
          :addr="item.addr"
          :manager="item.manager"
          :tel="item.tel"
      ></invoice-list-item>
    </div>
  </div>
</template>

<script setup>
import {useInvoice} from "~/store/Invoice";

const UInvoice = useInvoice().UnprocessedInvoices
const isClient = process.client

</script>

<style scoped>
</style>