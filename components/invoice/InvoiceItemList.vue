<template>
  <div>
    <div
        class="d-flex bg-white left-line-warning pa-2 mb-1"
    >
      <div class="d-flex align-center w-100">
        <v-icon class="text-grey-lighten-1 mr-3" size="large" icon="fa-regular fa-file"></v-icon>
        <v-row>
          <v-col cols="1">
            <invoice-item-block
                caption="номер:"
                :value="id"
            />
          </v-col>
          <v-col cols="4">
            <invoice-item-block
                caption="организация:"
                :value="organization"
            />
          </v-col>
          <v-col cols="5">
            <invoice-item-block
                caption="адрес:"
                :value="addr"
            />
          </v-col>
          <v-col cols="2">
            <invoice-item-block
                caption="телефон:"
                :value="tel"
            />
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import InvoiceItemBlock from "~/components/invoice/InvoiceItemBlock.vue";

const props = defineProps({
  id: String,
  date: String,
  organization: String,
  inn: String,
  email: String,
  manager: String,
  tel: String,
  addr: String,
})
</script>

<style scoped>

.left-line-warning {
  border-left: rgb(255, 154, 64) 4px solid;
}


</style>