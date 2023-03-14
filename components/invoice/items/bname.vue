<template>
  <div>
    <div class="d-flex pt-2 pb-2">
      <div
          class="d-flex justify-center align-center pl-4 pr-2 text-grey-lighten-1"
      >
        <v-icon
            size="20"
        >
          fa-regular fa-circle
        </v-icon>
      </div>
      <div
          class="d-flex justify-center align-center pl-2 pr-2"
      >
        <v-img
            style="width: 50px;"
            src="/catalog/86326/104547/104548/104550.jpg"
        >
        </v-img>
      </div>
      <div class="d-flex flex-column justify-center">
        <div class="code">РСВ-{{ code }}</div>
        <div class="name">{{ name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  code: String,
  name: String
})
</script>

<style scoped>
.code {
  color: #bb645f;
  font-size: 0.8em;
  font-weight: bold;
  font-stretch: condensed;
}

.name {
  color: #363636;
  font-size: 0.9em;

}
</style>