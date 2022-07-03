<template>
<section id="content" class="content">
    <div class="content__wrap">
        <div class="content__top">
          <h1>Пользователи</h1>
          <Button class="btn-primary btn-info" @click.native="reloadUserTable">Обновить данные</Button>
        </div>
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
        this.loadLimitUsers({ limit: this.limit, offset: 0 })
        this.setPaginate(this.getUsersLimitList)
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
        }),
        reloadUserTable(){
          this.loadLimitUsers({ limit: this.limit, offset: 0 })
        },
        showMore() {
            this.limit = this.limit * 2;
            this.loadLimitUsers({ limit: this.limit, offset: 0 })
            this.setPaginate(this.getUsersLimitList)
        },
        setPaginate() {
            setTimeout(() => {
                this.setupPagination(this.getUsersLimitList)
            }, 300);
        },
    }
}
</script>

<style lang="scss" scoped>
.article{
    font-weight: bold;
}

.justify-content-center {
    margin-bottom: 0;
}

</style>
