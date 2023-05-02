<template>
    <div>
        <div class="d-flex flex-row flex-wrap">
            <div class="mr-6">
                <v-icon
                    v-if="status === 'process'"
                    color="#00532180"
                    icon="fa-solid fa-circle-arrow-right"
                    size="100"
                ></v-icon>
                <v-icon
                    v-else-if="status === 'email'"
                    color="#00532180"
                    icon="fa fa-square-envelope"
                    size="100"
                ></v-icon>
                <v-icon
                    v-else
                    color="#00532180"
                    icon="fa fa-circle-check"
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
const props = defineProps({
    status: String,
    id: String,
    inn: String,
    name: String,
    addr: String,
    email: String,
    tel: String,
    manager: String
})

</script>

<style scoped>
</style>