<template>
<section id="content" class="content">
    <div class="flats">
        <div class="content__wrap">
            <h1>Квартиры</h1>
            <Table>
                <TableHeaderFlats slot="header"></TableHeaderFlats>
                <FlatsList slot="body" :flat-list="items"></FlatsList>
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
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import FlatsList from '@/components/homes/FlatsList'
import Table from '@/components/layouts/TableMain'
import TableHeaderFlats from '@/components/homes/TableHeaderFlats'
import paginationMixin from '@/mixins/pagination.mixin'
import Button from '@/components/ui/Button'

export default {
    name: 'FlatsPage',
    mixins: [paginationMixin],
    components: {
        Table,
        TableHeaderFlats,
        FlatsList,
        Button
    },
    data() {
        return {
            limit: 100,
            flatId: this.$route.params['id']
        }
    },
    mounted() {
        this.loadFlats({id: this.flatId})
        this.setPaginate()
    },
    computed: {
        ...mapGetters({
            getFlats: 'homes/getFlatList'
        }),
    },
    methods: {
        ...mapActions({
            loadFlats: 'homes/loadFlats'
        }),
        setPaginate() {
            setTimeout(() => {
                this.setupPagination(this.getFlats)
            }, 300);
        },
    }
}
</script>
