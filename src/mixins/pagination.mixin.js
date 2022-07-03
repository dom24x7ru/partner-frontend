export default {
    data() {
        return {
            page: 1,
            pageSize: 10,
            pageCount: 0,
            allItems: [],
            items: []
        }
    },
    methods: {
        setupPagination(allItems) {
            console.log('all ', allItems)
            this.allItems = this.lodash.chunk(allItems, this.pageSize)
            this.items = this.allItems[this.page - 1] || this.allItems[0]
            this.pageCount = this.lodash.size(this.allItems)
        },
        clickPaginate(page) {
            this.items = this.allItems[page - 1] || this.allItems[0]
        },
        showMoreItemsOnPage(e) {
            let itemCount = e.currentTarget.getAttribute('data-items')
            this.pageSize = itemCount
            this.setPaginate()
        },
    }
}