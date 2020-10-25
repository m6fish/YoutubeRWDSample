<script>
import videoWallClass from '../components/videoWall'
import { createNamespacedHelpers } from 'vuex'
const STORE_NAME = 'Hall'
const { mapGetters } = createNamespacedHelpers(`${STORE_NAME}/`)
const { mapGetters: favoGetters, mapActions: favoActions } = createNamespacedHelpers('Favo/')

export default {
    name: 'VideoWall',
    extends: videoWallClass,
    computed: {
        ...mapGetters([
            'getPage',
            'getVideoArr'
        ]),
        ...favoGetters([
            'getFavoIDs'
        ]),
        /**
         * 取得影片列表
         */
        getVideos () {
            return this.getVideoArr || []
        }
    },
    methods: {
        ...favoActions([
            'setFavorite'
        ]),
        /**
         * 加入/刪除蒐藏
         */
        setFavo (videoData) {
            this.setFavorite({ videoData })
        },
        /**
         * 是否已被收藏
         * @returns {Boolean} {true: YES, false: NO}
         */
        isActive (vID) {
            return this.getFavoIDs.includes(vID)
        }
    }
}
</script>
