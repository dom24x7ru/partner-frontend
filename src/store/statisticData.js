import serverApi from '@/api/index'

export default {
    namespaced: true,
    state: {
        stataList: []
    },
    getters: {
        getStataList(state) {
            return state.stataList
        }
    },
    mutations: {
        SET_STATA(state, payload) {
            state.stataList = payload
        }
    },
    actions: {
        async loadStata({ commit }) {
            try {
                const response = await serverApi.homeList.statisticData()
                commit('SET_STATA', response.data.body)
            } catch (error) {
                console.log('error', error)
            }
        },
    }
}
