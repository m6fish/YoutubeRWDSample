<script>
import videoWallClass from '../components/videoWall'
import { createNamespacedHelpers } from 'vuex'
const STORE_NAME = 'Favo'
const { mapGetters, mapActions } = createNamespacedHelpers(`${STORE_NAME}/`)

export default {
    name: 'VideoWall',
    extends: videoWallClass,
    computed: {
        ...mapGetters([
            'getFavoIDs',
            'getFavoList'
        ]),
        /**
         * 取得影片列表
         */
        getVideos () {
            return this.getFavoList || []
        }
    },
    methods: {
        ...mapActions([
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
