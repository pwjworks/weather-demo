/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:48:00
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-12 01:25:41
 */
import vuex from 'vuex'
import getters from './getters/getters'
import mutations from './mutations/mutations'
import defaultState from './state/state'

export default () => {
  return new vuex.Store({
    state: defaultState,
    getters,
    mutations
  })
}
