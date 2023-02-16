<template>
  <v-app>
    <v-app-bar
        theme="dark"
        color="#00A67C"
        class="w-100"
    >
      <v-container>
        <div class="d-flex align-center">
          <v-icon
              size="large"
              class="mr-1"
          >
            fas fa-grip-vertical
          </v-icon>
          <v-app-bar-title>
            <NuxtLink to="/" class="text-decoration-none text-white"><b>OREHT.RU - ЗАЯВКИ</b></NuxtLink>
          </v-app-bar-title>
        </div>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <div>
          <nuxt-page/>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
</script>
