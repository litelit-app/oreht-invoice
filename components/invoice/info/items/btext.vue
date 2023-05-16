<template>
    <div>
        <div
            class="d-flex flex-column"
            :class="addAlign ? 'align-center' : ''"
        >
            <div class="caption text-uppercase text-no-wrap">{{ caption }}:</div>
            <div
                class="value"
                :class="addAlign ? 'd-flex a' : ''"
            >{{ addRUB ? value + ' руб.' : value }}</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    caption: String,
    value: String,
    addRUB: Boolean,
    addAlign: Boolean
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