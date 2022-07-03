<template>
<tbody>
    <tr v-for="(item, index) in flatList" :key="item + index">
        <td class="text-center">
            {{item.id}}
        </td>
        <td>
            {{item.number}}
        </td>
        <td class="text-center">
            {{item.section}}
        </td>
        <td class="text-center">
            {{item.floor}}
        </td>
        <td class="text-center">
            {{item.rooms}}
        </td>
        <td class="text-center">
            {{item.square}}
        </td>
        <td class="text-center">
            {{item.residents}}
        </td>
        <td class="text-center">
            <ButtonMain class="btn-primary">Изменить</ButtonMain>
        </td>
    </tr>
</tbody>
</template>

<script>
import ButtonMain from '@/components/ui/Button'

export default {
    name: 'FlatsList',
    components: {
        ButtonMain
    },
    props: ['flatList'],
}
</script>

<style lang="scss" scoped>
td {
    vertical-align: middle;
}
</style>
