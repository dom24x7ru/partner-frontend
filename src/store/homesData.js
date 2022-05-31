import serverApi from '@/api/index'

export default {
    namespaced: true,
    state: {
        homes: {}
    },
    getters: {
        getHomesList(state) {
            return state.homes
        }
    },
    mutations: {
        SET_HOMES_LIST(state, payload) {
            state.homes = payload
        }
    },
    actions: {
        async loadHomes({ commit }) {
            try {
                const response = await serverApi.homeList.getHomes()
                let homes = response.data.body
                // console.log(homes)
                commit('SET_HOMES_LIST', homes)
            } catch (error) {
                console.log('error', error)
            }
        },
    }
}