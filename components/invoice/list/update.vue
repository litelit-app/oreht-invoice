<template>
    <div>
        <v-badge
            :content="needupdate"
            color="error"
        >
            <v-btn
                color="primary"
                variant="outlined"
                prepend-icon="fa fa-arrows-rotate"
                @click="onUpdateClick"
            >
                Обновить заявки
            </v-btn>
        </v-badge>
    </div>
</template>

<script setup>
const props = defineProps({
    needupdate: Number
})

const emit = defineEmits(['click-update'])

function onUpdateClick() {
    emit('click-update')
}

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