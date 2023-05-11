<template>
    <div>
        <other-header>СПИСОК НЕ ОБРАБОТАННЫХ ЗАЯВОК</other-header>
        <v-sheet
            class="mb-5 pa-4"
            elevation="1"
        >
            <invoice-list-update
                :needupdate="CountNeedToUpdate.result"
                @click-update="onUpdateClick"
            />
        </v-sheet>
        <div
            v-for="item in ListInvoices.invoices"
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
const LastDateUpdateListInvoices = ref('')

function onUpdateClick() {
    LastDateUpdateListInvoices.value = useDateNow()
    refreshNuxtData('UpdateListInvoices')
    refreshNuxtData('CountNeedToUpdate')
}

LastDateUpdateListInvoices.value = useDateNow()
console.log(LastDateUpdateListInvoices.value)

const {
    data: ListInvoices,
    pending: pendingListInvoices
} = await useAsyncData('UpdateListInvoices', () => $fetch(`/api/invoice/list`))

watch(ListInvoices, (newListInvoices) => {
    console.log('ListUpdate: ', newListInvoices)
})

const {
    data: CountNeedToUpdate
} = await useAsyncData('CountNeedToUpdate', () => $fetch(`/api/invoice/last`, {
    method: "POST",
    body: {date: LastDateUpdateListInvoices.value}
}))

let IntervalCountNeedToUpdate
onMounted(() => {
    IntervalCountNeedToUpdate = setInterval(() => {
        refreshNuxtData('CountNeedToUpdate')
    }, 30000)
})

onUnmounted(() => {
    clearInterval(IntervalCountNeedToUpdate)
})

watch(CountNeedToUpdate, (newCountNeedToUpdate) => {
    console.log('Update count - ', newCountNeedToUpdate)
})

</script>

<style scoped>
</style>