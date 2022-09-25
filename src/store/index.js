import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

export default Vuex.createStore({
  state: state,
  mutations: mutations,
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  modules: {
  }
});
