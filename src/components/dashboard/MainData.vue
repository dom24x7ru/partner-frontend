<template>
<div class="maindata-wrapper">

    <div class="card bg-primary mb-3 mb-xl-1">
        <div class="p-3">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>Всего домов</span>
                    <span class="badge badge-primary badge-pill">{{getHome.count}}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>Всего квартир</span>
                    <span class="badge badge-primary badge-pill">{{getHome.flats}}</span>
                </li>
            </ul>
        </div>
    </div>

    <div class="card bg-info mb-3 mb-xl-1">
        <div class="p-3 ">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Пользователей
                    <span class="badge badge-primary badge-pill">{{getUsers.count}}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Сегодня онлайн
                    <span class="badge badge-primary badge-pill">{{getUsers.today}}</span>
                </li>
            </ul>
        </div>
    </div>

    <div class="card bg-warning mb-3 mb-xl-1">
        <div class="p-3">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Всего чатов
                    <span class="badge badge-primary badge-pill">{{getChats.count}}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Сообщений
                    <span class="badge badge-primary badge-pill">{{getChats.messages}}</span>
                </li>
            </ul>
        </div>
    </div>

    <div class="card bg-success mb-3 mb-xl-1">
        <div class="p-3 text-center">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Всего голосований
                    <span class="badge badge-primary badge-pill">{{getVotes.count}}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Открытых
                    <span class="badge badge-primary badge-pill">{{getVotes.opened}}</span>
                </li>
            </ul>
        </div>
    </div>

    <div class="card bg-secondary mb-3 mb-xl-1">
        <div class="p-3 text-center">
            <ul class="list-group">
                <!-- <li v-for="(value, name) in getStata.recommendations" :key="name" class="list-group-item d-flex justify-content-between align-items-center">
                    Рекомендаций
                    <span class="badge badge-primary badge-pill">{{value}}</span>
                </li> -->
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Рекомендаций
                    <span class="badge badge-primary badge-pill">{{getRecom.count}}</span>
                </li>
            </ul>
        </div>
    </div>

</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'MainData',
    components: {

    },
    data() {
        return {

        };
    },
    mounted() {
        this.loadStata();
    },
    computed: {
        ...mapGetters({
            getHome: 'stata/getHome',
            getUsers: 'stata/getUsers',
            getChats: 'stata/getChats',
            getVotes: 'stata/getVotes',
            getRecom: 'stata/getRecom'
        }),
    },
    methods: {
        ...mapActions({
            loadStata: 'stata/loadStata'
        })
    }
}
</script>

<style lang="scss">
.maindata-wrapper {
    display: flex;
    justify-content: space-between;

    .list-group-item {
        text-align: left;
        color: white;
    }

    .card {
        width: 19%;
    }

    .badge {
        font-size: 12px;
    }
}
</style>
