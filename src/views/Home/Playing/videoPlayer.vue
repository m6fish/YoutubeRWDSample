<template>
    <div class="videoPlayer">
        <video ref="videoPlayer"
            class="video-js vjs-big-play-centered"
            @pause="onPause"
            @play="onPlay"
        />
    </div>
</template>

<script>
import ad from './ad'

export default {
    name: 'videoPlayer',
    data () {
        return {
            player: null,
            rate: 1.78, // 16:9
            videoOptions: {
                autoplay: 'muted',
                controls: true,
                height: '522',
                width: '930',
                sources: [{
                    // 測試影片
                    // src: 'http://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel.ism/.m3u8',
                    src: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
                    type: 'application/x-mpegURL'
                }]
            },
            adList: [100, 200], // 所有廣告ID
            nowAD: null, // 當前播放的廣告ID
            nowAD_DOM: null, // 當前的廣告dom,
            isPause: false // 當前是否暫停
        }
    },
    created () {
        window.addEventListener('resize', this.handleResize, false)
    },
    mounted () {
        this.player = this.$video(this.$refs.videoPlayer, this.videoOptions, this.onReady)
        this.handleResize()
    },
    beforeDestroy () {
        if (this.player) {
            this.player.dispose()
        }
        window.removeEventListener('resize', this.handleResize, false)
    },
    computed: {
        getPlayer () {
            return this.$refs.videoPlayer
        }
    },
    methods: {
        // 影片區大小縮放
        handleResize (e) {
            const maxWidth = 1368
            const videoWidth = this.$el.clientWidth
            const newWidth = videoWidth > maxWidth ? maxWidth : videoWidth
            const newHeight = newWidth / this.rate

            this.player.width(newWidth)
            this.player.height(newHeight)
        },
        // 影片開始播放
        onReady () {
            console.log('onPlayerReady')
        },
        // 影片暫停
        onPause () {
            this.isPause = true
            console.log('Pause')

            const AD_ID_FISRT = 100 // 首次廣告

            if (!this.nowAD) {
                this.$video.registerComponent('ad', ad)
                this.player.addChild('ad', { AD_ID: AD_ID_FISRT })
                this.nowAD = AD_ID_FISRT
            } else {
                // 已經註冊過廣告窗,則重新顯示
                this.nowAD_DOM.removeClass('vjs-ad-hide')
            }
        },
        // 影片播放
        onPlay () {
            this.isPause = false
            console.log('Play')

            // 當前有廣告,則隱藏
            if (this.nowAD) {
                this.nowAD_DOM = this.player.getChild('ad')
                console.log(this.nowAD_DOM)
                this.nowAD_DOM.addClass('vjs-ad-hide')
            }
        }
    }
}
</script>
