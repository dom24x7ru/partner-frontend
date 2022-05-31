import Vue from 'vue'
import Vuex from 'vuex'
import dashBoardMap from './dashBoardMap'
import stata from './statisticData'
import users from './usersData'
import homes from './homesData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dashBoardMap,
    stata,
    users,
    homes
  }
})
