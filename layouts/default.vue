<template>
    <v-app class="bg-grey-lighten-4">
        <v-navigation-drawer
            class="bg-white color-green-1"
            elevation="1"
        >
            <template v-slot:prepend>
                <div class="d-flex justify-center align-center ma-7 pt-5">
                    <v-img
                        src="/Logo.svg"
                    ></v-img>
                </div>
            </template>

            <v-list class="ma-4">
                <v-list-subheader>МЕНЮ:</v-list-subheader>

                <v-list-item
                    v-for="item in listMenu"
                    :key="item.name"

                    class="text-grey-darken-4"
                    rounded="xl"
                    @click="navigateTo(item.url)"
                    :active="item.isActive"
                >
                    <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                    </template>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>
        <v-app-bar
            color="white"
            elevation="1"
            density="compact"
        >
        </v-app-bar>
        <v-main>
            <div>
                <nuxt-page/>
            </div>
        </v-main>
    </v-app>
</template>

<script setup>
import {watch, reactive} from "vue";

const route = useRoute()
const listMenu = reactive([
    {name: 'ГЛАВНАЯ', url: '/main', icon: 'fas fa-home', isActive: false},
    {name: 'ЗАЯВКИ', url: '/invoice', icon: 'fas fa-rectangle-list', isActive: false},
    {name: 'АРХИВ', url: '/archive', icon: 'fas fa-boxes-stacked', isActive: false},
    {name: 'НАСТРОЙКИ', url: '/settings', icon: 'fas fa-wrench', isActive: false},
])

function setIsActiveMenuItem(url) {
    listMenu.forEach(item => {
        if (url.startsWith(item.url)) {
            listMenu.forEach(lm => lm.isActive = false)
            item.isActive = true
        }
    })
}

watch(route, value => {
    setIsActiveMenuItem(value.path)
})
setIsActiveMenuItem(route.path)

</script>

<style scoped>
.color-green-1 {
    color: #007F16;
}

</style>
