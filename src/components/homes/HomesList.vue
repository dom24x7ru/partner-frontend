<template>
<tbody>
    <tr v-for="(item, index) in homeList" :key="item + index">
        <td class="text-center">
            {{item.id}}
        </td>
        <td>
            {{item.address}}
        </td>
        <td class="text-center">
            <span v-if="item.extra.type == 1">МКД</span>
            <span v-else>Частный</span>
        </td>
        <td class="text-center">
            {{item.extra.flats}}
        </td>
        <td class="text-center">
            {{item.residents}}
        </td>
        <td class="text-center">
            <router-link :to="`/homes/${item.id}`">
                <a class="btn btn-info rounded-pill">Квартиры</a>
            </router-link>
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
    name: 'HomesList',
    components: {
        ButtonMain
    },
    props: ['homeList'],
}
</script>

<style lang="scss" scoped>
    td{
        vertical-align: middle;
    }
</style>
