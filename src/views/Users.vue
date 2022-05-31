<template>
<section id="content" class="content">
    <div class="content__wrap">
        <h1>Пользователи</h1>
        <Table>
            <TableHeaderUser slot="header"></TableHeaderUser>
            <UserList slot="body"></UserList>
        </Table>
        <UserList></UserList>
    </div>
</section>
</template>

<script>
import UserList from '@/components/users/UserList'
import Table from '@/components/layouts/TableMain'
import TableHeaderUser from '@/components/users/TableHeaderUsers'

export default {
    name: 'UsersAll',
    components: {
        UserList,
        Table,
        TableHeaderUser
    },
}
</script>
