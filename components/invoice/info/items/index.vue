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
                    <v-col
                        v-if="paramCol.p1 > 0"
                        :cols="paramCol.p1"

                        class="d-flex align-center"
                    >
                        <invoice-info-items-bname
                            :code="item.code"
                            :name="item.name"
                            :img="item.pic"
                        />
                    </v-col>
                    <v-col
                        v-if="paramCol.p2 > 0"
                        :cols="paramCol.p2"

                        class="d-flex align-center"
                    >
                        <invoice-info-items-btext
                            caption="В заявке"
                            :value="item.quantity"
                            :add-align="true"
                        />
                    </v-col>
                    <v-col
                        v-if="paramCol.p3 > 0"
                        :cols="paramCol.p3"

                        class="d-flex align-center"
                    >
                        <invoice-info-items-btext
                            caption="По факту"
                            :value="0"
                            :add-align="true"
                        />
                    </v-col>
                    <v-col
                        v-if="paramCol.p4 > 0"
                        :cols="paramCol.p4"

                        class="d-flex align-center"
                    >
                        <invoice-info-items-btext
                            caption="Цена"
                            :addRUB="true"
                            :value="item.price"
                        />
                    </v-col>
                    <v-col
                        v-if="paramCol.p5 > 0"
                        :cols="paramCol.p5"

                        class="d-flex align-center"
                    >
                        <invoice-info-items-btext
                            caption="Склад"
                            :add-align="true"
                            :value="item.storage.replace(' Склад', '')"
                        />
                    </v-col>
                    <v-col
                        v-if="paramCol.p6 > 0"
                        :cols="paramCol.p6"

                        class="d-flex align-center"
                    >
                        <invoice-info-items-btext
                            caption="Бренд"
                            :value="item.brand === '' ? '----------' : item.brand"
                        />
                    </v-col>
                    <v-col
                        v-if="paramCol.p7 > 0"
                        :cols="paramCol.p7"

                        class="d-flex align-center"
                    >
                        <invoice-info-items-btext
                            caption="Единица"
                            :value="item.up_ed"
                            :add-align="true"
                        />
                    </v-col>
                    <v-col
                        v-if="paramCol.p8 > 0"
                        :cols="paramCol.p8"

                        class="d-flex align-center"
                    >
                        <invoice-info-items-btext
                            caption="В упаковке"
                            :value="Number(item.up_kol).toFixed(0)"
                            :add-align="true"
                        />
                    </v-col>
                </v-row>
            </v-sheet>
        </v-hover>
    </div>
</template>

<script setup>
import {useDisplay} from "vuetify"

const props = defineProps({
    items: Array
})

const {name} = useDisplay()
const paramCol = computed(() => {
    switch (name.value) {
        case 'xs':
            return {p1: '10', p2: '2', p3: '0', p4: '0', p5: '0', p6: '0', p7: '0', p8: '0'}
        case 'sm':
            return {p1: '8', p2: '2', p3: '2', p4: '0', p5: '0', p6: '0', p7: '0', p8: '0'}
        case 'md':
            return {p1: '8', p2: '1', p3: '1', p4: '2', p5: '0', p6: '0', p7: '0', p8: '0'}
        case 'lg':
            return {p1: '7', p2: '1', p3: '1', p4: '1', p5: '1', p6: '1', p7: '0', p8: '0'}
        case 'xl':
            return {p1: '5', p2: '1', p3: '1', p4: '1', p5: '1', p6: '1', p7: '1', p8: '1'}
        case 'xxl':
            return {p1: '5', p2: '1', p3: '1', p4: '1', p5: '1', p6: '1', p7: '1', p8: '1'}
    }
    return undefined
})

</script>

<style scoped>
.onHover {
    cursor: pointer;
}

.offHover {
}

</style>