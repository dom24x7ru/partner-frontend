export default function (instance) {
    return {
        getUsers() {
            return instance.get('partner/users')
        },
        getUsersLimit(limit, offset) {
            return instance.get(`partner/users/?limit=${limit}&offset=${offset}`)
        },
    }
}