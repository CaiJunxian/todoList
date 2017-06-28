/**
 * Created by sysu_ on 2017/6/28.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import {state, mutations} from './mutations'
import plugins from './plugins'
import {getters} from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  plugins
})
