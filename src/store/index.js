import Vue from 'vue'
import Vuex from 'vuex'
import APP from './modules/APP'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        APP
    },
    strict: process.env.NODE_ENV !== 'production'
})
