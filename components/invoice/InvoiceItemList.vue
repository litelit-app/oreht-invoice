<template>
  <div>
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <div
            v-bind="props"
            class="d-flex left-line-warning pa-2 mb-1"
            :class="[isHovering ? 'bgHover' : 'bgWhite', colorWarn]"
        >
          <div class="d-flex align-center w-100">
            <v-icon class="text-grey-lighten-1 mr-3" size="large" icon="fa-regular fa-file"></v-icon>
            <v-row>
              <v-col
                  v-if="paramCol.p1 > 0"
                  :cols="paramCol.p1"
              >
                <invoice-item-block
                    caption="номер:"
                    :value="id"
                />
              </v-col>
              <v-col
                  v-if="paramCol.p2 > 0"
                  :cols="paramCol.p2"
              >
                <invoice-item-time-passed
                    caption="номер:"
                    :delta="deltaDate"
                />
              </v-col>
              <v-col
                  v-if="paramCol.p3 > 0"
                  :cols="paramCol.p3"
              >
                <invoice-item-block
                    caption="организация:"
                    :value="organization"
                />
              </v-col>
              <v-col
                  v-if="paramCol.p4 > 0"
                  :cols="paramCol.p4"
              >
                <invoice-item-block
                    caption="адрес:"
                    :value="addr"
                />
              </v-col>
              <v-col
                  v-if="paramCol.p5 > 0"
                  :cols="paramCol.p5"
              >
                <invoice-item-block
                    caption="менеджер:"
                    :value="manager"
                />
              </v-col>
            </v-row>
          </div>
        </div>
      </template>
    </v-hover>
  </div>
</template>

<script setup>
import InvoiceItemBlock from "~/components/invoice/InvoiceItemBlock.vue";
import InvoiceItemTimePassed from "~/components/invoice/invoiceItemTimePassed.vue";
import {ref, computed} from "vue";
import {useDisplay} from 'vuetify'

const props = defineProps({
  id: String,
  date: String,
  organization: String,
  inn: String,
  email: String,
  manager: String,
  tel: String,
  addr: String,
})

const {name} = useDisplay()

const paramCol = computed(() => {
  switch (name.value) {
    case 'xs':
      return {p1: '3', p2: '0', p3: '9', p4: '0', p5: '0'}
    case 'sm':
      return {p1: '2', p2: '2', p3: '8', p4: '0', p5: '0'}
    case 'md':
      return {p1: '1', p2: '1', p3: '5', p4: '5', p5: '0'}
    case 'lg':
      return {p1: '1', p2: '1', p3: '3', p4: '4', p5: '2'}
    case 'xl':
      return {p1: '1', p2: '1', p3: '3', p4: '4', p5: '2'}
    case 'xxl':
      return {p1: '1', p2: '1', p3: '3', p4: '4', p5: '2'}
  }
  return undefined
})

const deltaDate = ref()
const colorWarn = ref()

const valueDate = new Date(props.date.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1'))
const nowDate = Date.now()

deltaDate.value = Math.round((nowDate - valueDate) / 60 / 1000)

if (deltaDate.value < 10) colorWarn.value = 'left-line-little'
else if (deltaDate.value >= 10 && deltaDate.value < 30) colorWarn.value = 'left-line-middle '
else colorWarn.value = 'left-line-long'

</script>

<style scoped>

.bgHover {
  background: #eafaeb;
  cursor: pointer;
}

.bgWhite {
  background: #ffffff;
}

.left-line-little {
  border-left: #259238 4px solid;
}

.left-line-middle {
  border-left: #BF7330 4px solid;
}

.left-line-long {
  border-left: #BF3A30 4px solid;
}

</style>