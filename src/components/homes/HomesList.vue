<template>
<tbody>
    <tr v-for="(item, index) in getHomesList" :key="item + index">
        <td class="text-center">
            {{index + 1}}
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
            Ссылка
        </td>
        <td class="text-center">
            <ButtonMain class="btn-primary">Изменить</ButtonMain>
        </td>
    </tr>
</tbody>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ButtonMain from '@/components/ui/Button'

export default {
    name: 'HomesList',
    components: {
        ButtonMain
    },
    mounted() {
        this.loadHomes();
    },
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters({
            getHomesList: 'homes/getHomesList',
        }),
    },
    methods: {
        ...mapActions({
            loadHomes: 'homes/loadHomes'
        })
    }
}
</script>

<style lang="scss" scoped>
    td{
        vertical-align: middle;
    }
</style>
