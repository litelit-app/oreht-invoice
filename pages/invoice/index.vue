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
            v-if="!pendingListInvoices && ListInvoices.invoices.length === 0"
        >
            <v-alert
                v-if="CountNeedToUpdate.result === 0"
                class="ma-5"
                type="success"
                border="start"
                variant="tonal"
                title="Все заявки обработаны"
            ></v-alert>

            <v-alert
                v-if="CountNeedToUpdate.result > 0"
                class="ma-5"
                type="warning"
                border="start"
                variant="tonal"
                title="Есть новые заявки, необходимо обновить список."
            ></v-alert>
        </div>

        <div
            v-for="item in ListInvoices.invoices"
            :key="item.id"
        >
            <invoice-list-item
                :id="item.id"
                :id_old="String(item.id_old)"
                :date="Date.now() - (new Date(item.date.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1')))"
                :organization="String(item.organization)"
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
    ListInvoices.value.invoices.length = 0
    LastDateUpdateListInvoices.value = useDateNow()
    refreshNuxtData('CountNeedToUpdate')
    refreshNuxtData('UpdateListInvoices')
}

LastDateUpdateListInvoices.value = useDateNow()

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