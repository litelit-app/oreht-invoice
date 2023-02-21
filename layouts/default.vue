<template>
  <v-app class="bg-grey-lighten-4">
    <v-navigation-drawer
        class="bg-white color-green-1"
        elevation="1"
    >
      <template v-slot:prepend>
        <div class="d-flex justify-center align-center ma-10">
          <v-icon
              size="large"
              color="#007F16"
          >
            fas fa-grip-vertical
          </v-icon>
          <div class="color-green-1 mt-1">
            <NuxtLink to="/" class="text-decoration-none text-h5 color-green-1"><b>OREHT.RU</b></NuxtLink>
          </div>
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

const listMenu = [
  {name: 'ГЛАВНАЯ', url: '/', icon: 'fas fa-home'},
  {name: 'ЗАЯВКИ', url: '/invoice', icon: 'fas fa-rectangle-list'},
  {name: 'АРХИВ', url: '/archive', icon: 'fas fa-boxes-stacked'},
  {name: 'НАСТРОЙКИ', url: '/settings', icon: 'fas fa-wrench'},
]

</script>

<style scoped>
.color-green-1 {
  color: #007F16;
}

</style>
