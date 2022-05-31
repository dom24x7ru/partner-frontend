<template>
<tr>
    <th v-for="(item, index) in headers" :key="item + index" :class="(index != 1) ? 'text-center' : ''">
        {{item}}
    </th>
</tr>
</template>

<script>
export default {
    name: 'TableHeaderHomeList',
    data() {
        return {
            headers: [
                '#',
                'Адрес',
                'Тип дома',
                'Количество квартир',
                'Пользователей',
                'Квартиры',
                'Редактировать'
            ]
        };
    }
}
</script>
