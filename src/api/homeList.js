export default function (instance) {
    return {
        getHomes() {
            return instance.get('partner/houses')
        },
        statisticData() {
            return instance.get('partner/stat')
        },
        getHomesLimit(limit, offset) {
            return instance.get(`partner/houses/?limit=${limit}&offset=${offset}`)
        },
        getFlats(id) {
            return instance.get(`partner/houses/${id}/flats`)
        }
        // getOneUser(id) {
        //     return instance.get(`user/${id}`)
        // },
        // createUser(payload) {
        //     return instance.post('user', payload)
        // }
    }
}