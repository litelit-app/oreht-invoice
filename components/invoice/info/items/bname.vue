<template>
    <div>
        <div class="d-flex align-center">
            <div
                class="d-flex align-center pl-4 pr-1 text-grey-lighten-1"
            >
                <v-icon size="20">fa-regular fa-circle</v-icon>
            </div>
            <div
                class="d-flex align-center pl-2 pr-2"
            >
                <img
                    style="width: 50px;"
                    :src="ImageResult"
                />
            </div>
            <div class="d-flex flex-column">
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
const ImageUrl = useImageURL()
const ImageResult = ref('')

if (props.img !== '') ImageResult.value = ImageUrl.value + props.img
    else ImageResult.value = '/no-image.png'

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