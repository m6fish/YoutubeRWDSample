<template>
  <div class="playing">
      <video-player :options="videoOptions"/>
      <div class="title">{{getVideoMeta.title}}</div>
      <div class="des">{{getVideoMeta.description}}</div>
  </div>
</template>

<style lang="scss">

</style>

<script>
import videoPlayer from './videoPlayer'
import Favo from '@S/Favorites'
import Play from '@S/Playing'
import { createNamespacedHelpers, mapGetters as rootGetters } from 'vuex'
const STORE_NAME = 'Play'
// const { mapActions } = createNamespacedHelpers(`${STORE_NAME}/`)
const { mapGetters: favoGetters } = createNamespacedHelpers('Favo/')

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
        ...rootGetters([
            'getUserPlay'
        ]),
        ...favoGetters([
            'getFavoListAll'
        ]),
        getVideoMeta () {
            const { id, title, description } = this.getUserPlay
            const fromFavo = this.getFavoListAll[0]

            if (id) {
                return {
                    title,
                    description
                }
            } else if (fromFavo) {
                // 無ID, 直接取收藏頁第一筆撥放
                return {
                    title: fromFavo.title,
                    description: fromFavo.description
                }
            }
            // 資料不存在,回大廳
            alert('The video has not found!')
            this.$router.replace({ name: 'Hall' })
            return {
                title: '',
                description: ''
            }
        }
    }
}
</script>
