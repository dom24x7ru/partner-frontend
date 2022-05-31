<template>
<tr>
    <th v-for="(item, index) in headers" :key="item + index" :class="(index != 1) ? 'text-center' : ''">
        {{item}}
    </th>
</tr>
</template>

<script>
export default {
    name: 'TableHeaderUsers',
    data() {
        return {
            headers: [
                '#',
                'Номер телефона',
                'Фамилия',
                'Имя',
                'Отчество',
                'Адрес',
                'Статус'
            ]
        };
    }
}
</script>
