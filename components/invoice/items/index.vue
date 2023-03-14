<template>
  <div>
    <v-sheet
        v-for="item in IItems"
        :key="item.code"
        class="d-flex"
        elevation="2"
    >
      <invoice-items-bname
          :code="item.code"
          :name="item.name"
      />
      <div style="width: 10%">{{ item.price }}</div>
      <div style="width: 10%">{{ item.brend }}</div>
      <div style="width: 5%">{{ item.inum }}</div>
      <div style="width: 5%">{{ item.rnum }}</div>
    </v-sheet>
  </div>
</template>

<script setup>
import {useInvoice} from "~/store/Invoice";

const IItems = useInvoice().InvoiceItems
</script>

<style scoped>
</style>