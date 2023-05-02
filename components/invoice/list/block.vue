<template>
    <div>
        <div class="d-flex flex-column mr-10">
            <div class="inv-item-caption text-uppercase">{{ caption }}</div>
            <div
                class="inv-item-value"
                :class="nowrap ? 'text-no-wrap' : ''"
            >{{ value }}</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    caption: String,
    value: String,
    nowrap: Boolean
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