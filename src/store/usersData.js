import serverApi from '@/api/index'

export default {
    namespaced: true,
    state: {
        users: {},
        usersLimit: {},
        // paginateItems: []
    },
    getters: {
        getUsersList(state) {
            return state.users
        },
        getUsersLimitList(state) {
            return state.usersLimit
        },
    },
    mutations: {
        SET_USERS_LIST(state, payload) {
            state.users = payload
        },
        SET_USERS_LIMIT_LIST(state, payload) {
            state.usersLimit = payload
        },
    },
    actions: {
        async loadUsers({ commit }) {
            try {
                const response = await serverApi.userList.getUsers()
                let users = response.data.body
                commit('SET_USERS_LIST', users)
            } catch (error) {
                console.log('error', error)
            }
        },
        async loadLimitUsers({ commit }, { limit, offset }) {
            try {
                const response = await serverApi.userList.getUsersLimit(limit, offset)
                let users = response.data.body
                commit('SET_USERS_LIMIT_LIST', users)
            } catch (error) {
                console.log('error', error)
            }
        }
    }
}
