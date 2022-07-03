import serverApi from '@/api/index'

export default {
    namespaced: true,
    state: {
        homes: {},
        homesLimit: {},
        flatsList: {}
    },
    getters: {
        getHomesList(state) {
            return state.homes
        },
        getHomesLimitList(state) {
            return state.homesLimit
        },
        getFlatList(state) {
            return state.flatsList
        }
    },
    mutations: {
        SET_HOMES_LIST(state, payload) {
            state.homes = payload
        },
        SET_HOMES_LIMIT_LIST(state, payload) {
            state.homesLimit = payload
        },
        SET_FLATS_LIST(state, payload) {
            state.flatsList = payload
        }
    },
    actions: {
        async loadHomes({ commit }) {
            try {
                const response = await serverApi.homeList.getHomes()
                let homes = response.data.body
                commit('SET_HOMES_LIST', homes)
            } catch (error) {
                console.log('error', error)
            }
        },
        async loadLimitHomes({ commit }, { limit, offset }) {
            try {
                const response = await serverApi.homeList.getHomesLimit(limit, offset)
                let homes = response.data.body
                commit('SET_HOMES_LIMIT_LIST', homes)
            } catch (error) {
                console.log('error', error)
            }
        },
        async loadFlats({ commit }, { id }) {
            try {
                const response = await serverApi.homeList.getFlats(id)
                let flats = response.data.body
                console.log('respose', flats)
                commit('SET_FLATS_LIST', flats)
            } catch (error) {
                console.log('error', error)
            }
        },
    }
}