import Vue from 'vue'
import Vuex from 'vuex'
import dashBoardMap from './dashBoardMap'
import stata from './statisticData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dashBoardMap,
    stata
  }
})
