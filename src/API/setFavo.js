import localforage from 'localforage'

const NAMESPACE = 'FAVO-'

// 加入收藏
export const addFavo = ({ dispatch, commit }, payload) => {
    return localforage.setItem(
        `${NAMESPACE}${payload.id}`,
        payload
    ).then((value) => {
        return value
    }).catch((err) => {
        console.warn('oops! add fail', err)
        return false
    })
}

// 移除收藏
export const removeFavo = ({ dispatch, commit }, payload) => {
    return localforage.removeItem(
        `${NAMESPACE}${payload.id}`
    ).then((value) => {
        return true
    }).catch((err) => {
        console.warn('oops! remove fail', err)
        return false
    })
}

// 取得當前收藏列表
export const fetchFavoList = () => {
    return localforage.startsWith(NAMESPACE).then((res) => res)
}
