import instance from './instance'
import homeList from './homeList'
import userList from './users'

export default {
    homeList: homeList(instance),
    userList: userList(instance)
}