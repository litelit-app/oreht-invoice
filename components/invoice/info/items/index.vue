<template>
  <div>
    <v-hover
        v-slot="{ isHovering, props }"
        v-for="item in items"
        :key="item.code"
    >
      <v-sheet
          v-bind="props"
          border
          class="pt-3 pb-2"
          :class="[isHovering ? 'onHover' : 'offHover']"
      >
        <v-row>
          <v-col cols="5">
            <invoice-info-items-bname
                :code="item.code"
                :name="item.name"
                :img="item.pic"
            />
          </v-col>
          <v-col cols="1">
            <div class="d-flex h-100 align-center">
              <invoice-info-items-btext
                  caption="Склад"
                  :value="item.storage"
              />
            </div>
          </v-col>
          <v-col cols="1">
            <div class="d-flex h-100 align-center">
              <invoice-info-items-btext
                  caption="Бренд"
                  :value="item.brand === '' ? '----------' : item.brand"
              />
            </div>
          </v-col>
          <v-col cols="1">
            <div class="d-flex h-100 align-center justify-center">
              <invoice-info-items-btext
                  caption="Единица"
                  :value="item.up_ed"
              />
            </div>
          </v-col>
            <v-col cols="1">
                <div class="d-flex h-100 align-center justify-center">
                    <invoice-info-items-btext
                        caption="В упаковке"
                        :value="Number(item.up_kol).toFixed(0)"
                    />
                </div>
            </v-col>
            <v-col cols="1">
                <div class="d-flex h-100 align-center justify-center">
                    <invoice-info-items-btext
                        caption="Цена"
                        :value="item.price"
                    />
                </div>
            </v-col>
          <v-col cols="1">
            <div class="d-flex justify-center h-100 align-center">
              <invoice-info-items-btext
                  caption="В заявке"
                  :value="item.quantity"
              />
            </div>
          </v-col>
          <v-col cols="1">
            <div class="d-flex justify-center h-100 align-center">
              <invoice-info-items-btext
                  caption="По факту"
                  :value="0"
              />
            </div>
          </v-col>
        </v-row>
      </v-sheet>
    </v-hover>
  </div>
</template>

<script setup>
const props = defineProps({
    items: Array
})
</script>

<style scoped>
.onHover {
  cursor: pointer;
}

.offHover {
}

</style>