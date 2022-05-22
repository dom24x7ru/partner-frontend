<template>
<div>
    <yandex-map :settings="settings" :coords="coords" :zoom="zoom">
        <!--Markers-->
        <!-- <ymap-marker v-for="(item, index) in markers" :key="index" :marker-id="index" :hint-content="test" :coords="item" /> -->
        <ymap-marker v-for="(item, index) in getHomes" :key="index" :marker-id="index" :hint-content="`Квартир: ${item.extra.flats}, Пользователей: ${item.residents}`" :coords="[item.lat, item.lon]" />
    </yandex-map>
    <!-- <li v-for="(item, index) in getHomes" :key="index">
        <span>{{item}}</span>
    </li> -->
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
            // test: 'Квартир: 80, Пользователей 100',
            coords: [54, 39],
            // coords2: [
            //     54.82896654088406,
            //     39.831893822753904,
            // ],
            // markers: [
            //     [
            //         54.82896654088406,
            //         39.831893822753904,
            //     ],
            //     [54, 39]
            // ],
            zoom: 6,
            settings: {
                apiKey: 'ce888604-e1ec-4b92-9219-b6fa711cca66',
                lang: 'ru_RU',
                coordorder: 'latlong',
                enterprise: false,
                version: '2.1'
            },
            // homes: []
        };
    },
    mounted() {
        this.loadHomes();
        // this.homes = this.getHomes
        // console.log(this.homes)
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
