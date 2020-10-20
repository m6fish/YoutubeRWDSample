
/**
 * 轉換 youtube duration 時間
 * @returns {String} 轉換後的時間
 */
export const convertTime = (duration) => {
    return (duration.match(/\d+/g) || []).join(':')
}
