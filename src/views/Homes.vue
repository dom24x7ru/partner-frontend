<template>
<section id="content" class="content">
    <div class="homes">
        <div class="content__wrap">
            <h1>Дома</h1>
            <Table>
                <TableHeaderHome slot="header"></TableHeaderHome>
                <HomesList slot="body" :home-list="items"></HomesList>
            </Table>
            <div class="flex-wrapper">
                <span class="article me-md-2">Показать на странице:</span>
                <Button class="btn-outline-light me-md-2" @click.native="showMoreItemsOnPage" data-items="50">50</Button>
                <Button class="btn-outline-light" @click.native="showMoreItemsOnPage" data-items="100">100</Button>
                <PaginatePlug :page-count="pageCount" 
                    :prev-text="'Назад'" 
                    :next-text="'Вперед'" 
                    :page-class="'page-item'" 
                    :prev-class="'page-item'" 
                    :prev-link-class="'page-link'" 
                    :page-link-class="'page-link'" 
                    :container-class="'pagination justify-content-center'" 
                    :next-class="'page-item'" 
                    :next-link-class="'page-link'" 
                    :click-handler="clickPaginate">
                </PaginatePlug>
                <Button class="btn-primary showmore" @click.native="showMore">Загрузить еще</Button>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import HomesList from '@/components/homes/HomesList'
import Table from '@/components/layouts/TableMain'
import TableHeaderHome from '@/components/homes/TableHeader'
import paginationMixin from '@/mixins/pagination.mixin'
import Button from '@/components/ui/Button'

export default {
    name: 'HomesPage',
    mixins: [paginationMixin],
    components: {
        Table,
        TableHeaderHome,
        HomesList,
        Button
    },
    data() {
        return {
            limit: 100,
            showFlats: false
        };
    },
    mounted() {
        this.loadLimitHomes({ limit: this.limit, offset: 0 })
        this.setPaginate()
    },
    computed: {
        ...mapGetters({
            getHomesLimitList: 'homes/getHomesLimitList',
        }),
    },
    methods: {
        ...mapActions({
            loadLimitHomes: 'homes/loadLimitHomes',
        }),
        reloadHomesTable(){
          this.loadLimitHomes({ limit: this.limit, offset: 0 })
        },
        showMore() {
            this.limit = this.limit * 2;
            this.loadLimitHomes({ limit: this.limit, offset: 0 })
            this.setPaginate()
        },
        setPaginate() {
            setTimeout(() => {
                this.setupPagination(this.getHomesLimitList)
            }, 300);
        },
    }
}
</script>

