import { createApp } from "vue"
import { createStore } from "vuex"
//创建一个新的store实例
const store = createStore({
  state() { 
    return {
      count:345345
    }
  },
  mutations: {
    addCount(state, date) { 
      state.count+=date
    }
  },
  actions: {
    addAction({ commit }, date) { 
      commit('addCount',date)
    }
  },
  modules: {},
  getters: {
    getCount(state){
      return `我是前端发现者，在测试getters方法,获取count的值是：${state.count}`
    }
  }
})
export default store
