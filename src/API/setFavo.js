import localforage from 'localforage'

const NAMESPACE = 'FAVO-'

// 加入收藏
export const addFavo = ({ dispatch, commit }, payload) => {
    console.log('add Favo', payload)

    return localforage.setItem(
        `${NAMESPACE}${payload.id}`,
        payload
    ).then((value) => {
        console.log('add success')
        return value
    }).catch((err) => {
        console.log('oops! add fail', err)
        return false
    })
}

// 移除收藏
export const removeFavo = ({ dispatch, commit }, payload) => {
    console.log('remove Favo')

    return localforage.setItem(
        `${NAMESPACE}${payload.id}`,
        payload
    ).then((value) => {
        console.log('remove success')
        return true
    }).catch((err) => {
        console.log('oops! remove fail', err)
        return false
    })
}

// 取得當前收藏列表
export const fetchFavoList = () => {
    return localforage.startsWith(NAMESPACE).then((res) => res)
}
