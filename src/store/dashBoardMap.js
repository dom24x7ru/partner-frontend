import serverApi from '@/api/index'

export default {
    namespaced: true,
    state: {
        homeList: []
    },
    getters: {
        getHomeList(state) {
            return state.homeList
        }
    },
    mutations: {
        SET_HOMELIST(state, payload) {
            state.homeList = payload
        }
    },
    actions: {
        async loadHomes({ commit }) {
            try {
                const response = await serverApi.homeList.getHomes()
                commit('SET_HOMELIST', response.data.body)
            } catch (error) {
                console.log('error', error)
            }
        },
    }
}
