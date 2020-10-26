<template>
    <div class="video">
        <video ref="videoPlayer"
            class="video-js vjs-big-play-centered"
        />
    </div>
</template>

<script>
export default {
    name: 'video',
    props: {
        options: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data () {
        return {
            player: null
        }
    },
    mounted () {
        this.player = this.$video(this.$refs.videoPlayer, this.options, () => {
            console.log('onPlayerReady')
        })
    },
    beforeDestroy () {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>
