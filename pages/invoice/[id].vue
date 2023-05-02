<template>
    <div>
        <div
            class="text-h5 text-red-accent-4 ma-5"
        >{{ testValue }}</div>
        <div
            class="d-flex align-center">
            <v-btn
                size="small"
                icon
                color="#FFFFF"
                class="ml-5"
                @click="router.go(-1)"
            >
                <v-icon>fas fa-chevron-left</v-icon>
            </v-btn>
            <other-header>ИНФОРМАЦИЯ ПО ЗАЯВКЕ</other-header>
        </div>
        <v-sheet
            v-if="!loadingMain"
            elevation="1"
            class="pa-6"
        >
            <div class="d-flex flex-column justify-center align-center mb-5">

            </div>
            <invoice-info-header
                status="process"
                :id="InvoiceMain.main.id_old"
                :inn="InvoiceMain.main.inn"
                :name="InvoiceMain.main.name"
                :email="InvoiceMain.main.email"
                :addr="InvoiceMain.main.addr"
                :tel="InvoiceMain.main.tel"
                :manager="InvoiceMain.main.manager"
            />
        </v-sheet>
        <v-sheet
            v-else
        >
            <v-progress-circular indeterminate :size="50" :width="6"></v-progress-circular>
        </v-sheet>

        <other-header>ДЕЙСТВИЯ</other-header>

        <v-sheet
            elevation="1"
            class="pa-6"
        >
            <v-btn
                color="primary"
                class="mr-5"
                :loading="loading"
                @click="onClickTest"
            >
                <v-icon class="pr-6 pl-2">fa fa-arrow-right</v-icon>
                Обработать
            </v-btn>
        </v-sheet>

        <other-header>ПОЗИЦИИ</other-header>

        <v-sheet
            v-if="!loadingItems"
            elevation="1"
        >
            <invoice-info-items
                :items="InvoiceItems.items"
            />
        </v-sheet>
    </div>
</template>

<script setup>
import {refreshNuxtData, useLazyAsyncData} from "#app"
import {watch} from "vue"

const router = useRouter()
const route = useRoute()

const testValue = ref(1)
const idInvoice = route.params.id

const {
    data: InvoiceMain,
    pending: loadingMain
} = await useLazyAsyncData('InvoiceMain', () => $fetch(`/api/invoice/${idInvoice}/main`))
const {
    data: InvoiceItems,
    pending: loadingItems
} = await useLazyAsyncData('InvoiceItems', () => $fetch(`/api/invoice/${idInvoice}/items`))

function onClickTest() {
    refreshNuxtData('InvoiceMain')
    refreshNuxtData('InvoiceItems')
}

watch(InvoiceMain, (newInvoiceMain) => {
})

watch(InvoiceItems, (newInvoiceItems) => {
})

let intervalVal
onMounted(() => {
    console.log("start timer")
    intervalVal = setInterval(() => {
        refreshNuxtData('InvoiceItems')
        testValue.value++
    }, 5000)
})

onUnmounted(() => {
    console.log("stop timer")
    clearInterval(intervalVal)
})

</script>

<style scoped>
</style>
