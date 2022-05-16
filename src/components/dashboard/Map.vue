<template>
<yandex-map :settings="settings" :coords="coords" :zoom="zoom">
    <!--Markers-->
</yandex-map>
</template>

<script>
import { yandexMap } from 'vue-yandex-maps'

export default {
    name: 'Map',
    components: {
        yandexMap
    },
    data() {
        return {
            coords: [54, 39],
            zoom: 6,
            settings: {
                apiKey: 'ce888604-e1ec-4b92-9219-b6fa711cca66',
                lang: 'ru_RU',
                coordorder: 'latlong',
                enterprise: false,
                version: '2.1'
            }
        };
    },
}
</script>

<style>
.ymap-container {
    height: 500px;
}
</style>
