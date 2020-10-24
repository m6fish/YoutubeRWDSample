import Axios from 'axios'

const state = {}

const actions = {
    async SEND_AJAX (actions, payload) {
        const [method, url, data = {}, config] = payload

        console.log(method, url, data, config)

        const res = await Axios[method](url, data, config).catch(err => {
            console.warn('ERR!', err)
        })

        const { state: returnState, data: returnData } = res || {}
        return +returnState === 200 ? returnData : false
    }
}

const mutations = {}

const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}
