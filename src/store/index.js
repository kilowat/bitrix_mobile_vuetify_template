import Vue from 'vue'
import Vuex from 'vuex'
import example from './modules/example'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        example
    }
})

store.BX = window.BX;

export default store;