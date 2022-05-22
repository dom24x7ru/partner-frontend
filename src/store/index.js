import Vue from 'vue'
import Vuex from 'vuex'
import dashBoardMap from './dashBoardMap'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dashBoardMap
  }
})
