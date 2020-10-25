import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import localforage from 'localforage'

import '@CSS/main.scss'

Vue.config.productionTip = false

localforage.config({
    name: 'mytube'
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
