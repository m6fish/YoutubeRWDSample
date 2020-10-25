import { addFavo, removeFavo, fetchFavoList } from '@API/setFavo'

const state = {
    favoList: [] // 已加入收藏列表
}

const actions = {
    // 取得當前的收藏列表
    fetchFavorite ({ commit }, payload) {
        fetchFavoList().then((res) => {
            const listFromForage = Object.values(res)
            commit(_M.SET_ARRAY_DATA, { mode: 2, name: 'favoList', data: listFromForage })
        })
    },
    /**
     * 加入/刪除收藏
     * @param {Object} param.videoData 要加入收藏的video資料
     */
    setFavorite (state, { videoData }) {
        const vID = videoData.id
        const favoIDs = state.getters.getFavoIDs
        const hasExist = favoIDs.includes(vID)
        if (!hasExist) {
            state.commit(_M.SET_ARRAY_DATA, { mode: 1, name: 'favoList', data: videoData })
            addFavo(state, videoData)
        } else {
            state.commit(_M.SET_ARRAY_DATA, { mode: 0, name: 'favoList', idx: favoIDs.indexOf(vID) })
            removeFavo(state, videoData)
        }
    }
}

const mutations = {
    [_M.SET_DATA] (state, { name, data }) {
        state[name] = data
    },
    /**
     * 設定陣列型態的資料
     * @param {Int} param.mode {0: 刪除, 1:新增, 2:直接設定}
     * @param {String} param.name 要變動的state名稱
     * @param {Object} param.data (optional) 要異動的資料
     * @param {Int} param.idx (optional) 要變動Arrat之Index
     */
    [_M.SET_ARRAY_DATA] (state, { mode, name, data, idx }) {
        switch (+mode) {
        case 0:
            state[name].splice(idx, 1)
            break
        case 1:
            state[name].push(data)
            break
        case 2:
            state[name] = [...data]
            break
        default:
            console.warn('error mode')
            break
        }
    }
}

const getters = {
    getFavoList: state => state.favoList, // 取得原始 favolist
    getFavoIDs: state => state.favoList.map(({ id }) => id) // 取得已加入影片ID陣列
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
