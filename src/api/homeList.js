export default function (instance) {
    return {
        getHomes() {
            return instance.get('partner/houses')
        },
        statisticData() {
            return instance.get('partner/stat')
        }
        // getOneUser(id) {
        //     return instance.get(`user/${id}`)
        // },
        // createUser(payload) {
        //     return instance.post('user', payload)
        // }
    }
}