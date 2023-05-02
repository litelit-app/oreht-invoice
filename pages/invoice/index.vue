<template>
    <div>
        <other-header>СПИСОК НЕ ОБРАБОТАННЫХ ЗАЯВОК</other-header>
        <v-sheet
            class="mb-5 pa-4"
            elevation="1"
        >
            <invoice-list-update
                :needupdate="InvoiceStore.needUpdateInvoice"
                @click-update="onUpdateClick"
            />
        </v-sheet>
        <div
            v-for="item in UInvoice"
        >
            <invoice-list-item
                :id="item.id"
                :id_old="item.id_old"
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
import {useInvoice} from "~/store/Invoice"
const InvoiceStore = useInvoice()


const UInvoice = InvoiceStore.Invoices
InvoiceStore.UpdateListInvoices()

function onUpdateClick() {
    InvoiceStore.needUpdateInvoice = 6
    InvoiceStore.UpdateListInvoices()
}

</script>

<style scoped>
</style>