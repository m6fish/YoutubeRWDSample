<template>
  <div class="playing">
      <video-player :options="videoOptions"/>
  </div>
</template>

<style lang="scss">

</style>

<script>
import videoPlayer from './videoPlayer'

export default {
    name: 'Playing',
    components: {
        videoPlayer
    },
    data () {
        return {
            videoOptions: {
                autoplay: 'muted',
                controls: true,
                sources: [{
                    // 測試影片
                    // src: 'http://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel.ism/.m3u8',
                    src: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
                    type: 'application/x-mpegURL'
                }]
            }
        }
    }
}
</script>
