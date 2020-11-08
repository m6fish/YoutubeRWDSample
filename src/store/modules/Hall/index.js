import Axios from 'axios'
import { convertTime } from '@LIB/utils'

const state = {
    allVideo: [], // 所有的影片清單
    page: 1, // 當前頁碼
    maxPage: 1, // 總共幾頁
    PER_PAGE: 12, // 每頁幾筆
    nextPageToken: '' // 查詢下頁token
}

// 把API回傳影片資料格式化成顯示用資料
const formatData = (items) => {
    const STR_LESS = 100
    return items.map(({ id = '', contentDetails, snippet }) => {
        // 取得本地語言標題
        const { description = '', title = '' } = snippet.localized
        // 取得圖片
        const { medium } = snippet.thumbnails
        // 取得影片時間
        const { duration: durationOri } = contentDetails
        return {
            id,
            title,
            description: description.length > STR_LESS ? description.substr(0, STR_LESS) : description,
            pic: medium.url || '',
            duration: convertTime(durationOri)
        }
    })
}

const actions = {
    /**
     * 打影片API取得結果
     * @param {Int} payload.mode {1: 取得第一批, 2: 取得下一批}
     */
    async fetchVideo ({ commit, dispatch, rootGetters }, payload) {
        // 沒有KEY
        if (!rootGetters.getKey) {
            return false
        }

        const { mode } = payload
        const VIDEO_KEY = rootGetters.getKey
        const url = 'https://www.googleapis.com/youtube/v3/videos'
        const params = {
            part: 'snippet,contentDetails',
            key: VIDEO_KEY,
            chart: 'mostPopular',
            hl: 'zh-TW',
            regionCode: 'TW',
            maxResults: 50
        }
        if (+mode === 2) {
            params.pageToken = state.nextPageToken
        }

        const res = await Axios.get(url, { params }).catch(err => { console.warn('ERR!', err) })
        const { status: returnState } = res || {}

        if (+returnState !== 200) {
            return false
        }
        return res
    },

    // 取得youtube影片清單
    async fetchVideoList ({ commit, dispatch }, payload) {
        const res = await dispatch('fetchVideo', { mode: 1 })
        if (!res) {
            return false
        }

        const { nextPageToken, items } = res.data

        // 紀錄token
        commit(_M.SET_DATA, { name: 'nextPageToken', data: nextPageToken })

        // 設定allVideo & 頁碼
        const theFormatData = formatData(items)
        commit(_M.SET_DATA, { name: 'allVideo', data: theFormatData })
        dispatch('calcPage')
    },
    // 取得下一批資料
    async fetchNextVideo ({ state, commit, dispatch }, payload) {
        // already no next page!
        if (!state.nextPageToken) {
            console.warn('Already no next page!')
            return false
        }

        const res = await dispatch('fetchVideo', { mode: 2 })
        if (!res) {
            return false
        }
        const { nextPageToken, items } = res.data

        // 紀錄token
        commit(_M.SET_DATA, { name: 'nextPageToken', data: nextPageToken || '' })

        // 設定allVideo & 頁碼
        const theFormatData = formatData(items)
        commit(_M.SET_DATA, { name: 'allVideo', data: [...state.allVideo, ...theFormatData] })
        dispatch('calcPage')
    },
    // 計算與設定總頁數
    calcPage ({ commit, state }) {
        // 計算&設定總頁數
        const maxPage = Math.ceil(state.allVideo.length / state.PER_PAGE)
        commit(_M.SET_DATA, { name: 'maxPage', data: maxPage })
    },
    // 設定頁碼
    setPageNum ({ commit, dispatch, getters }, payload) {
        if (+payload <= getters.getMaxPage) {
            commit(_M.SET_DATA, { name: 'page', data: +payload })
        }

        // 到底線前,向後要新資料
        if (+payload >= getters.getMaxPage - 1) {
            dispatch('fetchNextVideo')
        }
    }
}

const mutations = {
    [_M.SET_DATA] (state, { name, data }) {
        state[name] = data
    }
}

const getters = {
    getPage: state => state.page,
    getAllVideo: state => state.allVideo, // 取得所有的影片
    // 取得"當前顯示頁面"的影片
    getVideoArr: state => {
        return state.allVideo.slice(state.PER_PAGE * (state.page - 1), state.PER_PAGE * state.page)
    },
    getNextToken: state => state.nextPageToken,
    getMaxPage: state => state.maxPage
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
