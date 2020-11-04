import Video from 'video.js'

const component = Video.getComponent('component')

export default class ad1 extends component {
    constructor (player, options) {
        super(player, options)
        console.log(options)
        this.addClass('vjs-ad_container')
    }

    createEl () {
        // AD_ID: 廣告編號
        const { AD_ID } = this.options_

        const div = Video.dom.createEl('div')
        div.innerHTML = `
        <div class="vjs_con_title">簽下去!</div>
        <div class="vjs_con_content">戰艦世界</div>
        `
        console.log('create:', AD_ID)
        return div
    }
}
