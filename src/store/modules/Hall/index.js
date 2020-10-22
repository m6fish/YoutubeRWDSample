import Axios from 'axios'
import { convertTime } from '@LIB/utils'

const state = {
    allVideo: [], // 所有的影片清單
    videoArr: [], // 當前顯示頁面的清單
    page: 1, // 當前頁碼
    maxPage: 1, // 總共幾頁
    PER_PAGE: 12, // 每頁幾筆
    nextPageToken: '' // 查詢下頁token
}

const actions = {

    // 取得youtube影片清單
    async fetchVideoList ({ commit, dispatch }, payload) {
        const VIDEO_KEY = process.env.VUE_APP_VIDEO_KEY
        const url = 'https://www.googleapis.com/youtube/v3/videos'
        const data = {
            params: {
                part: 'snippet,contentDetails',
                key: VIDEO_KEY,
                chart: 'mostPopular',
                hl: 'zh-TW',
                regionCode: 'TW',
                maxResults: 50
            }
        }

        const res = await Axios.get(url, data).catch(err => { console.warn('ERR!', err) })
        const { status: returnState, data: returnData } = res || {}

        if (+returnState !== 200) {
            return false
        }

        const { nextPageToken, items } = returnData

        // 紀錄token
        commit(_M.SET_DATA, { name: 'nextPageToken', data: nextPageToken })

        // 格式化資料&紀錄
        const formatData = items.map(({ id = '', contentDetails, snippet }) => {
            // 取得本地語言標題
            const { description = '', title = '' } = snippet.localized
            // 取得圖片
            const { medium } = snippet.thumbnails
            // 取得影片時間
            const { duration: durationOri } = contentDetails
            return {
                id,
                title,
                description: description.length > 25 ? description.substr(0, 25) : description,
                pic: medium.url || '',
                duration: convertTime(durationOri)
            }
        })
        // 設定allVideo
        commit(_M.SET_DATA, { name: 'allVideo', data: formatData })
        // 設定頁碼&當前頁面videoArr
        dispatch('calcVideoPage')
    },
    // 計算與設定總頁數, 並依當前頁面設定videoArr
    calcVideoPage ({ commit, state }) {
        // 計算&設定總頁數
        const maxPage = Math.ceil(state.allVideo.length / state.PER_PAGE)
        commit(_M.SET_DATA, { name: 'maxPage', data: maxPage })

        // 依當前頁面設定videoArr
        const video = state.allVideo.slice(state.PER_PAGE * (state.page - 1), state.PER_PAGE * state.page)
        commit(_M.SET_DATA, { name: 'videoArr', data: video })
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
    getVideoArr: state => state.videoArr, // 取得"當前顯示頁面"的影片
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
