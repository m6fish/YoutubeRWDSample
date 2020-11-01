<template>
  <div class="playing">
      <div class="title">{{getVideoMeta.title}}</div>
      <video-player :options="videoOptions"/>
      <div class="des">{{getVideoMeta.description}}</div>
  </div>
</template>

<style lang="scss">

</style>

<script>
import videoPlayer from './videoPlayer'
import Favo from '@S/Favorites'
import Play from '@S/Playing'
import { createNamespacedHelpers } from 'vuex'
const STORE_NAME = 'Play'
const { mapActions } = createNamespacedHelpers(`${STORE_NAME}/`)

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
    },
    beforeCreate () {
        const storeArr = [
            { name: 'Play', newStore: Play },
            { name: 'Favo', newStore: Favo }
        ]
        this.$root.$emit('add-store', storeArr)
    },
    beforeMount () {
        this.fetchFavorite()
    },
    beforeDestroy () {
        this.$root.$emit('remove-store', [STORE_NAME])
    },
    computed: {
        getVideoMeta () {
            const { id } = this.$route.query
            console.log(id)

            if (id) {
            // 有ID

                // TODO:先從store撈資料, 若無再從forge撈資料

            } else {
                // 無ID, 直接取收藏頁第一筆撥放
            }

            return {
                title: 'ABC',
                description: '123456'
            }
        }
    }
}
</script>
