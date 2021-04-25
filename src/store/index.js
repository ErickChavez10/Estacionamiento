import Vue from 'vue'
import Vuex from 'vuex'
import socket from './sockets';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socket,
    token: 'no_token'
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
  }
})
