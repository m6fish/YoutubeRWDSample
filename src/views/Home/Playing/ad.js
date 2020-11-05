import Video from 'video.js'

const component = Video.getComponent('component')

export default class ad extends component {
    constructor (player, options) {
        super(player, options)
        this.addClass('vjs-ad_container')
    }

    createEl () {
        this.ALL_ID = {
            100:
                `<div class="vjs_con_title">簽下去!</div>
                <div class="vjs_con_content"><a href="https://www.google.com" target="_blank">戰艦世界</a></div>`,
            200:
                `<div class="vjs_con_title">全速前進!</div>
                <div class="vjs_con_content"><a href="https://www.google.com" target="_blank">戰車世界</a></div>`
        }
        const { AD_ID } = this.options_
        const div = Video.dom.createEl('div')
        div.innerHTML = this.ALL_ID[AD_ID]
        this.AD_DIV = div
        return div
    }

    // 更換廣告, 如果沒有註冊在ALL_ID,則用預設
    changeAD (newID) {
        const { AD_ID } = this.options_
        console.log(100, newID, AD_ID)
        this.AD_DIV.innerHTML = this.ALL_ID[newID] || this.ALL_ID[AD_ID]
    }
}
