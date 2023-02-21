<template>
  <div>
    <div class="d-flex flex-column mr-10">
      <v-sheet class="inv-item-caption text-uppercase">{{ caption }}</v-sheet>
      <v-sheet class="inv-item-value">{{ value }}</v-sheet>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  caption: String,
  value: String
})
</script>

<style scoped>
.inv-item-caption {
  color: #bcbcbc;
  font-size: 0.6em;
}

.inv-item-value {
  color: #484848;
  font-size: 0.9em;
  font-weight: bold;
}
</style>