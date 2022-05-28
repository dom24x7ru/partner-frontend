import serverApi from '@/api/index'

export default {
    namespaced: true,
    state: {
        house: {},
        users: {},
        chats: {},
        votes: {},
        recom: {}
    },
    getters: {
        getHome(state) {
            return state.house
        },
        getUsers(state) {
            return state.users
        },
        getChats(state) {
            return state.chats
        },
        getVotes(state) {
            return state.votes
        },
        getRecom(state) {
            return state.recom
        }
    },
    mutations: {
        SET_STATA_HOME(state, payload) {
            state.house = payload
        },
        SET_USERS(state, payload) {
            state.users = payload
        },
        SET_CHATS(state, payload) {
            state.chats = payload
        },
        SET_VOTES(state, payload) {
            state.votes = payload
        },
        SET_RECOM(state, payload) {
            state.recom = payload
        }
    },
    actions: {
        async loadStata({ commit }) {
            try {
                const response = await serverApi.homeList.statisticData()
                let house = response.data.body.house
                let users = response.data.body.users
                let chats = response.data.body.im
                let votes = response.data.body.votes
                let recom = response.data.body.recommendations

                commit('SET_STATA_HOME', house)
                commit('SET_USERS', users)
                commit('SET_CHATS', chats)
                commit('SET_VOTES', votes)
                commit('SET_RECOM', recom)
            } catch (error) {
                console.log('error', error)
            }
        },
    }
}
