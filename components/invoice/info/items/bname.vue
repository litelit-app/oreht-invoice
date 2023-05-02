<template>
    <div>
        <div class="d-flex mb-1">
            <div
                class="d-flex justify-center align-center pl-4 pr-1 text-grey-lighten-1"
            >
                <v-icon
                    size="20"
                >
                    fa-regular fa-circle
                </v-icon>
            </div>
            <div
                class="d-flex justify-center align-center pl-2 pr-2"
            >
                <img
                    style="width: 50px;"
                    :src="ImageUrl + img"
                />
            </div>
            <div class="d-flex flex-column justify-center">
                <div class="code">РСВ-{{ code }}</div>
                <div class="name">{{ name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    code: String,
    name: String,
    img: String
})

import {useGlobal} from "~/store/global"

const ImageUrl = useGlobal().ImageURL

</script>

<style scoped>
.code {
    color: #005321;
    font-size: 0.8em;
    font-weight: bold;
    font-stretch: condensed;
}

.name {
    color: #363636;
    font-size: 0.9em;

}
</style>