import Axios from 'axios'

const state = {
    userPlay: {} // 使用者點擊播放的的影片資訊
}

const actions = {
    async SEND_AJAX (actions, payload) {
        const [method, url, data = {}, config] = payload

        console.log(method, url, data, config)

        const res = await Axios[method](url, data, config).catch(err => {
            console.warn('ERR!', err)
        })

        const { state: returnState, data: returnData } = res || {}
        return +returnState === 200 ? returnData : false
    },
    // 設定使用者點擊播放的影片資訊
    SET_USER_PLAY ({ commit }, payload) {
        commit(_M.SET_ROOT_DATA, { name: 'userPlay', data: payload })
    }
}

const mutations = {
    [_M.SET_ROOT_DATA] (state, { name, data }) {
        state[name] = data
    }
}

const getters = {
    getUserPlay: state => state.userPlay
}

export default {
    state,
    actions,
    mutations,
    getters
}
