<template>
<section id="content" class="content">
    <div class="content__wrap">
        <h1>Пользователи</h1>
        <Table>
            <TableHeaderUser slot="header"></TableHeaderUser>
            <UserList slot="body" :user-list="items"></UserList>
        </Table>
        <div class="flex-wrapper">
            <span class="article me-md-2">Показать на странице:</span>
            <Button class="btn-outline-light me-md-2" @click.native="showMoreItemsOnPage" data-items="50">50</Button>
            <Button class="btn-outline-light" @click.native="showMoreItemsOnPage" data-items="100">100</Button>
            <PaginatePlug :page-count="pageCount" :prev-text="'Назад'" :next-text="'Вперед'" :page-class="'page-item'" :prev-class="'page-item'" :prev-link-class="'page-link'" :page-link-class="'page-link'" :container-class="'pagination justify-content-center'" :next-class="'page-item'" :next-link-class="'page-link'" :click-handler="clickPaginate">
            </PaginatePlug>
            <Button class="btn-primary showmore" @click.native="showMore">Загрузить еще</Button>
        </div>
    </div>
</section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import UserList from '@/components/users/UserList'
import Table from '@/components/layouts/TableMain'
import TableHeaderUser from '@/components/users/TableHeaderUsers'
import paginationMixin from '@/mixins/pagination.mixin'
import Button from '@/components/ui/Button'

export default {
    name: 'UsersAll',
    mixins: [paginationMixin],
    components: {
        UserList,
        Table,
        TableHeaderUser,
        Button
    },
    data() {
        return {
            limit: 100,
        }
    },
    mounted() {
        // this.loadUsers();
        this.loadLimitUsers({ limit: this.limit, offset: 0 })
        this.setPaginate()
    },
    computed: {
        ...mapGetters({
            getUsersList: 'users/getUsersList',
            getUsersLimitList: 'users/getUsersLimitList'
        }),
    },
    methods: {
        ...mapActions({
            loadUsers: 'users/loadUsers',
            loadLimitUsers: 'users/loadLimitUsers',
            // loadPaginateItems: 'users/loadPaginateItems'
        }),
        setPaginate() {
            setTimeout(() => {
                this.setupPagination(this.getUsersLimitList)
            }, 300);
        },
        showMore() {
            this.limit = this.limit * 2;
            // console.log('limit ', this.limit)
            this.loadLimitUsers({ limit: this.limit, offset: 0 })
            this.setPaginate()
        }, 
        showMoreItemsOnPage(e){
            let itemCount = e.currentTarget.getAttribute('data-items')
            // alert(itemCount)
            this.pageSize = itemCount
            console.log(this.pageSize)
            this.setPaginate()
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination{
    margin-left: 50px;
}

.article{
    font-weight: bold;
}

.flex-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
}

.justify-content-center {
    margin-bottom: 0;
}

.showmore {
    margin-left: 25px;
}
</style>
