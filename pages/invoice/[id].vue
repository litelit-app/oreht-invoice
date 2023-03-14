<template>
  <div>
    <div class="d-flex align-center">
      <v-btn
          size="small"
          icon
          color="#FFFFF"
          class="ml-5"
          @click="navigateTo('/invoice')"
      >
        <v-icon>fas fa-chevron-left</v-icon>
      </v-btn>
      <other-header>ИНФОРМАЦИЯ ПО ЗАЯВКЕ</other-header>
    </div>
    <v-sheet
        elevation="1"
        class="pa-6"
    >
      <div class="d-flex flex-column justify-center align-center mb-5">

      </div>
      <invoice-info-header
          status="process"
          :id="idInvoice"
          inn="583445544423"
          name="ИП Пронин Дмитрий Дмитриевич"
          addr="442630, Пензенская обл, с Наровчат"
          tel="+79273616522"
          manager="Сойчик Маргарита (тел. 120)"
      />
    </v-sheet>

    <other-header>ДЕЙСТВИЯ</other-header>

    <v-sheet
        elevation="1"
        class="pa-6"
    >
      <invoice-info-action/>
    </v-sheet>

    <other-header>ПОЗИЦИИ</other-header>

    <v-sheet
        elevation="1"
    >
      <invoice-items/>
    </v-sheet>

  </div>
</template>

<script setup>
const route = useRoute()
const idInvoice = route.params.id
</script>

<style scoped>
</style>
