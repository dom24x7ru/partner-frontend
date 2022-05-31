import serverApi from '@/api/index'

export default {
    namespaced: true,
    state: {
        users: {}
    },
    getters: {
        getUsersList(state) {
            return state.users
        }
    },
    mutations: {
        SET_USERS_LIST(state, payload) {
            state.users = payload
        }
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
    }
}
