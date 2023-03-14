<template>
  <div>
    <div class="mb-3">
      <div
          class="d-flex align-center block-caption"
      >
        <v-icon size="x-small">{{ icon }}</v-icon>
        <div class="text-uppercase ml-1">{{ caption }}</div>
      </div>
      <div
          class="block-text ml-4"
      >
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: String,
  caption: String,
  value: String
})
</script>

<style scoped>
.block-caption {
  width: 8em;
  border-bottom: #484848 1px solid;
  color: #9a9a9a;
  font-stretch: condensed;
  font-size: 0.8em;
}

.block-text {
  font-weight: bold;
  font-size: 1em;
  color: #363636;
}

</style>
