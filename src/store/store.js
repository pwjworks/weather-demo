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
