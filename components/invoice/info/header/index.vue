<template>
    <div>
        <div class="d-flex flex-row flex-wrap">
            <div
                v-if="isVisibleIcon"
                class="mr-6"
            >
                <v-icon
                    v-if="status === 1"
                    color="#9fbfac"
                    icon="fa-solid fa-circle-arrow-right"
                    size="100"
                ></v-icon>
                <v-icon
                    v-else-if="status === 2"
                    color="#df8e46"
                    icon="fa fa-square-envelope"
                    size="100"
                ></v-icon>
                <v-icon
                    v-else
                    color="#246E39"
                    icon="fa-regular fa-circle-check"
                    size="100"
                ></v-icon>
            </div>
            <div class="mr-10">
                <invoice-info-header-block
                    icon="fa-regular fa-file-lines"
                    caption="Номер"
                    :value="id"
                />
                <invoice-info-header-block
                    icon="fas fa-bars-staggered"
                    caption="ИНН"
                    :value="inn"
                />
            </div>
            <div class="mr-10">
                <invoice-info-header-block
                    icon="fa-regular fa-building"
                    caption="Организация"
                    :value="name"
                />
                <invoice-info-header-block
                    icon="fa fa-location-dot"
                    caption="Email"
                    :value="email"
                />
            </div>
            <div>
                <invoice-info-header-block
                    icon="fa fa-phone"
                    caption="Телефон"
                    :value="tel"
                />
                <invoice-info-header-block
                    icon="fa fa-user-tie"
                    caption="Менеджер"
                    :value="manager"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import {useDisplay} from "vuetify"

const props = defineProps({
    status: Number,
    id: String,
    inn: String,
    name: String,
    addr: String,
    email: String,
    tel: String,
    manager: String
})

console.log(props.status)

const { name: display } = useDisplay()
const isVisibleIcon = computed(() => {
    switch (display.value) {
        case 'xs': return false
        case 'sm': return false
        case 'md': return false
        case 'lg': return true
        case 'xl': return true
        case 'xxl': return true
    }
    return undefined
})

</script>

<style scoped>
</style>