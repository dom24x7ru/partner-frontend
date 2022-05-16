<template>
<div class="maindata-wrapper">

    <div class="card bg-primary mb-3 mb-xl-1">
        <div class="p-3">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Всего домов
                    <span class="badge badge-primary badge-pill">11114</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Всего квартир
                    <span class="badge badge-primary badge-pill">1112</span>
                </li>
            </ul>
        </div>
    </div>

    <div class="card bg-info mb-3 mb-xl-1">
        <div class="p-3 ">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Пользователей
                    <span class="badge badge-primary badge-pill">999</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Сегодня онлайн
                    <span class="badge badge-primary badge-pill">120</span>
                </li>
            </ul>
        </div>
    </div>

    <div class="card bg-warning mb-3 mb-xl-1">
        <div class="p-3">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Всего чатов
                    <span class="badge badge-primary badge-pill">999</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Сообщений
                    <span class="badge badge-primary badge-pill">120</span>
                </li>
            </ul>
        </div>
    </div>

    <div class="card bg-success mb-3 mb-xl-1">
        <div class="p-3 text-center">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Всего голосований
                    <span class="badge badge-primary badge-pill">99</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Открытых
                    <span class="badge badge-primary badge-pill">12</span>
                </li>
            </ul>
        </div>
    </div>

    <div class="card bg-secondary mb-3 mb-xl-1">
        <div class="p-3 text-center">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Рекомендаций
                    <span class="badge badge-primary badge-pill">99</span>
                </li>
            </ul>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'MainData',
    components: {

    },
    data() {
        return {

        };
    },
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
    .card{
        width: 19%;
    }
    .badge{
        font-size: 12px;
    }
}
</style>
