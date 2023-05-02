<template>
    <div>
        <v-hover>
            <template v-slot:default="{ isHovering, props }">
                <div
                    v-bind="props"
                    class="d-flex left-line-warning pa-2 mb-1"
                    :class="[isHovering ? colorHover : 'bgWhite', colorWarn]"
                    @click="onClickInvoiceItem(id)"
                >
                    <div class="d-flex align-center w-100">
                        <v-icon class="text-grey-lighten-1 mr-3" size="large" icon="fa-regular fa-file"></v-icon>
                        <v-row>
                            <v-col
                                v-if="paramCol.p1 > 0"
                                :cols="paramCol.p1"
                            >
                                <invoice-list-block
                                    caption="номер:"
                                    :value="id_old"
                                    :nowrap=true
                                />
                            </v-col>
                            <v-col
                                v-if="paramCol.p2 > 0"
                                :cols="paramCol.p2"
                            >
                                <invoice-list-time
                                    caption="номер:"
                                    :delta="deltaDate"
                                />
                            </v-col>
                            <v-col
                                v-if="paramCol.p3 > 0"
                                :cols="paramCol.p3"
                            >
                                <invoice-list-block
                                    caption="ИНН:"
                                    :value="inn"
                                    :nowrap=true
                                />
                            </v-col>
                            <v-col
                                v-if="paramCol.p4 > 0"
                                :cols="paramCol.p4"
                            >
                                <invoice-list-block
                                    caption="организация:"
                                    :value="organization"
                                    :nowrap=false
                                />
                            </v-col>
                            <v-col
                                v-if="paramCol.p5 > 0"
                                :cols="paramCol.p5"
                            >
                                <invoice-list-block
                                    caption="адрес:"
                                    :value="addr"
                                    :nowrap=false
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
import {useDisplay} from 'vuetify'

const props = defineProps({
    id: String,
    id_old: String,
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
            return {p1: '3', p2: '0', p3: '0', p4: '9', p5: '0'}
        case 'sm':
            return {p1: '2', p2: '2', p3: '0', p4: '8', p5: '0'}
        case 'md':
            return {p1: '2', p2: '2', p3: '0', p4: '8', p5: '0'}
        case 'lg':
            return {p1: '1', p2: '1', p3: '0', p4: '3', p5: '7'}
        case 'xl':
            return {p1: '1', p2: '1', p3: '1', p4: '3', p5: '6'}
        case 'xxl':
            return {p1: '1', p2: '1', p3: '1', p4: '3', p5: '6'}
    }
    return undefined
})

const deltaDate = ref()
const colorWarn = ref()
const colorHover = ref()

const valueDate = new Date(props.date.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1'))
const nowDate = Date.now()

deltaDate.value = Math.round((nowDate - valueDate) / 60 / 1000)

if (deltaDate.value < 10) {
    colorWarn.value = 'left-line-little'
    colorHover.value = 'bg-hover-little'

} else if (deltaDate.value >= 10 && deltaDate.value < 30) {
    colorWarn.value = 'left-line-middle'
    colorHover.value = 'bg-hover-middle'
} else {
    colorWarn.value = 'left-line-long'
    colorHover.value = 'bg-hover-long'
}

function onClickInvoiceItem(invoice) {
    navigateTo(`/invoice/${invoice}`)
}

</script>

<style scoped>
.bg-hover-little {
    background: #00532110;
    cursor: pointer;
}

.bg-hover-middle {
    background: #BF733010;
    cursor: pointer;
}

.bg-hover-long {
    background: #d1000010;
    cursor: pointer;
}

.bgWhite {
    background: #ffffff;
}

.left-line-little {
    border-left: #005321 4px solid;
}

.left-line-middle {
    border-left: #BF7330 4px solid;
}

.left-line-long {
    border-left: #d10000 4px solid;
}

</style>