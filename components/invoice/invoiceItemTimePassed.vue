<template>
  <div>
    <div class="d-flex flex-column mr-10">
      <div class="inv-item-caption text-uppercase">Время:</div>
      <div
          class="inv-item-value text-no-wrap"
          :class="[colorWarn]"
      >{{ valueDate }} мин
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  delta: Number
})

const valueDate = ref('')
const colorWarn = ref('v-little')

if (props.delta > 100) valueDate.value = ">99"
else valueDate.value = props.delta.toString()

if (props.delta < 10) colorWarn.value = 'v-little'
else if (props.delta >= 10 && props.delta < 30) colorWarn.value = 'v-middle'
else colorWarn.value = 'v-long'

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

.v-little {
  color: #259238;
}

.v-middle {
  color: #BF7330;
}

.v-long {
  color: #BF3A30;
}

</style>