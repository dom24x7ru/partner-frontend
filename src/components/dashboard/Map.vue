<template>
<div>
    <yandex-map :settings="settings" :coords="coords" :zoom="zoom">
        <!--Markers-->
        <ymap-marker v-for="(item, index) in getHomes" :key="index" :marker-id="index" :hint-content="`Квартир: ${item.extra.flats}, Пользователей: ${item.residents}`" :coords="[item.lat, item.lon]" />
    </yandex-map>
</div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
// Vuex *
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'MyMap',
    components: {
        yandexMap,
        ymapMarker
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
            },
        };
    },
    mounted() {
        this.loadHomes();
    },
    computed: {
        ...mapGetters({
            getHomes: 'dashBoardMap/getHomeList'
        }),
    },
    methods: {
        ...mapActions({
            loadHomes: 'dashBoardMap/loadHomes'
        })
    }
}
</script>

<style>
.ymap-container {
    height: 500px;
}
</style>
