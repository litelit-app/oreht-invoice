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
            v-if="isActiveUpperMenu"
            color="white"
            elevation="1"
        >
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-app-bar-nav-icon variant="text" v-bind="props"></v-app-bar-nav-icon>
                </template>

                <v-list>
                    <v-list-subheader>МЕНЮ:</v-list-subheader>
                    <v-list-item
                        v-for="(item, i) in listMenu"
                        :key="i"
                        active-color="primary"
                        :value="item"
                        :active="item.isActive"
                        @click="navigateTo(item.url)"
                    >
                        <template v-slot:prepend>
                            <v-icon :icon="item.icon"></v-icon>
                        </template>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <div
                class="d-flex justify-center align-center"
            >
                <div
                    class="ml-2"
                    style="width: 8em;"
                >
                    <v-img
                        src="/Logo.svg"
                    ></v-img>
                </div>
            </div>
        </v-app-bar>
        <v-main>
            <div>
                <nuxt-page/>
            </div>
        </v-main>
    </v-app>
</template>

<script setup>
import {watch, reactive, computed} from "vue";
import {useDisplay} from "vuetify";

const NoteUpperMenu = ref('')

const route = useRoute()
const listMenu = reactive([
    {name: 'ЗАЯВКИ', url: '/invoice', icon: 'fas fa-rectangle-list', isActive: false},
    {name: 'ИНФОРМАЦИЯ', url: '/info', icon: 'fas fa-chart-line', isActive: false},
    {name: 'АРХИВ', url: '/archive', icon: 'fas fa-boxes-stacked', isActive: false},
    {name: 'НАСТРОЙКИ', url: '/settings', icon: 'fas fa-wrench', isActive: false},
])

function setIsActiveMenuItem(url) {
    listMenu.forEach(item => {
        if (url.startsWith(item.url)) {
            listMenu.forEach(lm => lm.isActive = false)
            item.isActive = true
            NoteUpperMenu.value = item.note
        }
    })
}

watch(route, value => {
    setIsActiveMenuItem(value.path)
})
setIsActiveMenuItem(route.path)

const {name: display} = useDisplay()
const isActiveUpperMenu = computed(() => {
    switch (display.value) {
        case 'xs':
            return true
        case 'sm':
            return true
        case 'md':
            return true
        case 'lg':
            return false
        case 'xl':
            return false
        case 'xxl':
            return false
    }
    return undefined
})

</script>

<style scoped>
.color-green-1 {
    color: #007F16;
}

</style>
