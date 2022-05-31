<template>
<section id="content" class="content">
    <div class="content__wrap">
        <h1>Дома</h1>
        <Table>
            <TableHeaderHome slot="header"></TableHeaderHome>
            <HomesList slot="body"></HomesList>
        </Table>
    </div>
</section>
</template>

<script>
import Table from '@/components/layouts/TableMain'
import TableHeaderHome from '@/components/homes/TableHeader'
import HomesList from '@/components/homes/HomesList'

export default {
    name: 'HomesPage',
    components: {
        Table,
        TableHeaderHome,
        HomesList
    },
    data() {
        return {

        };
    },
    computed: {

    },
    methods: {

    }
}
</script>
