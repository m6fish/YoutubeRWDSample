import Axios from 'axios'
import { convertTime } from '@LIB/utils'

const state = {
    videoArr: [], // 影片清單
    page: 1, // 當前頁碼
    nextPageToken: '' // 查詢下頁token
}

const actions = {

    // 取得youtube影片清單
    async fetchVideoList ({ commit }, payload) {
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
        console.log(res)
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
                description,
                pic: medium.url || '',
                duration: convertTime(durationOri)
            }
        })
        commit(_M.SET_DATA, { name: 'videoArr', data: formatData })
    }

}

const mutations = {
    [_M.SET_DATA] (state, { name, data }) {
        state[name] = data
    }
}

const getters = {
    getPage: state => state.page,
    getVideoArr: state => state.videoArr,
    getNextToken: state => state.nextPageToken
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
