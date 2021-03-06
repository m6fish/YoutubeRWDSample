import { addFavo, removeFavo, fetchFavoList } from '@API/setFavo'

const state = {
    favoList: [], // 已加入收藏列表
    page: 1, // 當前頁碼
    maxPage: 1, // 總共幾頁
    PER_PAGE: 12 // 每頁幾筆
}

const actions = {
    // 取得當前的收藏列表
    fetchFavorite ({ commit, dispatch }, payload) {
        fetchFavoList().then((res) => {
            const listFromForage = Object.values(res)
            commit(_M.SET_ARRAY_DATA, { mode: 2, name: 'favoList', data: listFromForage })
            dispatch('calcPage')
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
    },
    // 計算與設定總頁數
    calcPage ({ commit, state }) {
        // 計算&設定總頁數
        const maxPage = Math.ceil(state.favoList.length / state.PER_PAGE)
        commit(_M.SET_DATA, { name: 'maxPage', data: maxPage })
    },
    // 設定頁碼
    setPageNum ({ commit }, payload) {
        commit(_M.SET_DATA, { name: 'page', data: +payload })
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
    getFavoListAll: state => state.favoList, // 取得原始 favolist
    getFavoIDs: state => state.favoList.map(({ id }) => id), // 取得已加入影片ID陣列
    // 取得"當前顯示頁面"的影片
    getFavoList: state => {
        return state.favoList.slice(state.PER_PAGE * (state.page - 1), state.PER_PAGE * state.page)
    },
    getPage: state => state.page,
    getMaxPage: state => state.maxPage
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
