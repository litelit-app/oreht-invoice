<template>
  <div>
    <div>
      <v-btn
          color="primary"
          class="mr-5"
          :loading="loading"
          @click="loading = true"
      >
        <v-icon class="pr-6 pl-2">fa fa-arrow-right</v-icon>
        Обработать
      </v-btn>
      <v-btn
          color="primary"
          disabled
      >
        <v-icon class="pr-6 pl-2">fa fa-envelope</v-icon>
        Отправить
      </v-btn>
    </div>
  </div>
</template>

<script setup>
const loading = ref(false)
</script>

<style scoped>

</style>