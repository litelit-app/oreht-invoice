<template>
  <div>
    <div class="d-flex flex-column text-no-wrap">
      <div class="caption text-uppercase">{{ caption }}:</div>
      <div class="value d-flex justify-center">{{ value }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  caption: String,
  value: String,
})
</script>

<style scoped>
.caption {
  color: #bcbcbc;
  font-size: 0.6em;
}

.value {
  color: #484848;
  font-size: 0.9em;
  font-weight: bold;
}
</style>