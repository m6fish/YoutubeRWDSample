<template>
    <div class="videoPlayer">
        <video ref="videoPlayer"
            class="video-js vjs-big-play-centered"
        />
    </div>
</template>

<script>
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
            }

        }
    },
    created () {
        window.addEventListener('resize', this.handleResize, false)
    },
    mounted () {
        this.player = this.$video(this.$refs.videoPlayer, this.videoOptions, () => {
            console.log('onPlayerReady')
        })
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
        handleResize (e) {
            const maxWidth = 1368
            const videoWidth = this.$el.clientWidth
            const newWidth = videoWidth > maxWidth ? maxWidth : videoWidth
            const newHeight = newWidth / this.rate

            this.player.width(newWidth)
            this.player.height(newHeight)
        }
    }
}
</script>
