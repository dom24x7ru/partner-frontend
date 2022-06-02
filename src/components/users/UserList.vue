<template>
<tbody>
    <tr v-for="(item, index) in userList" :key="item + index">
        <td class="text-center">{{item.id}}</td>
        <td>
            <span>{{item.mobile}}</span>
        </td>
        <td class="text-center">
            <span v-if="item.person">{{item.person.surname}}</span>
        </td>
        <td class="text-center">
            <span v-if="item.person">{{item.person.name}}</span>
        </td>
        <td class="text-center">
            <span v-if="item.person">{{item.person.midname}}</span>
        </td>
        <td class="text-center">
            <span>г.Москва, ул.Северная д.5</span>
        </td>
        <td class="text-center">
            <span v-if="item.deleted" class="badge bg-danger">Удален</span>
            <span v-if="item.banned" class="badge bg-warning">Заблокирован</span>
            <span v-if="!item.deleted && !item.banned" class="badge bg-info">Активный</span>
        </td>
        <td class="text-center">
            <Button class="btn-primary">Изменить</Button>
        </td>
        <td class="text-center">
            <Button class="btn-warning rounded-pill me-md-2">Блокировать</Button>
            <Button class="btn-danger rounded-pill">Удалить</Button>
        </td>
    </tr>
</tbody>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
import Button from '@/components/ui/Button'
// import paginationMixin from '@/mixins/pagination.mixin'

export default {
    name: 'UserList',
    // mixins: [paginationMixin],
    props: ['userList'],
    components: {
        Button
    },
    mounted() {
        // this.loadUsers()
        // this.loadLimitUsers({limit: this.limit, offset: 0})
        // this.setupPagination(this.getUsersLimitList)
    },
    data() {
        return {
            // limit: 100
        };
    },
    computed: {
        // ...mapGetters({
        //     getUsersList: 'users/getUsersList',
        //     getUsersLimitList: 'users/getUsersLimitList',
        //     getPaginateItems: 'users/getPaginateItems'
        // }),
    },
    methods: {
        // ...mapActions({
        //     loadUsers: 'users/loadUsers',
        //     loadLimitUsers: 'users/loadLimitUsers'
        // })
    }
}
</script>

<style scoped>
    td{
        vertical-align: middle;
    }
</style>
