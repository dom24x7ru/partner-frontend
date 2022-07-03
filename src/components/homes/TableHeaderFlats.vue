<template>
<tr>
    <th v-for="(item, index) in headers" :key="item + index" :class="(index != 1) ? 'text-center' : ''">
        {{item}}
    </th>
</tr>
</template>

<script>
export default {
    name: 'TableHeaderFlats',
    data() {
        return {
            headers: [
                '#',
                'Номер квартиры',
                'Подъезд',
                'Этаж',
                'Количество комнат',
                'Квадратура',
                'Пользователей',
                'Редактирование'
            ]
        };
    }
}
</script>