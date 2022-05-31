<template>
<tbody>
    <tr v-for="(item, index) in getUsersList" :key="item.id">
        <td class="text-center">{{index + 1}}</td>
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
            <span class="badge bg-danger">Удален</span>
        </td>
    </tr>
</tbody>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'UserList',
    components: {

    },
    mounted() {
        this.loadUsers();
    },
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters({
            getUsersList: 'users/getUsersList',
        }),
    },
    methods: {
        ...mapActions({
            loadUsers: 'users/loadUsers'
        })
    }
}
</script>
