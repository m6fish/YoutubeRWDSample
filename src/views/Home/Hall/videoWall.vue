<script>
import videoWallClass from '../components/videoWall'
import { createNamespacedHelpers } from 'vuex'
const STORE_NAME = 'Hall'
const { mapGetters, mapActions } = createNamespacedHelpers(`${STORE_NAME}/`)

export default {
    name: 'VideoWall',
    extends: videoWallClass,
    computed: {
        ...mapGetters([
            'getPage',
            'getVideoArr'
        ]),
        /**
         * 取得影片列表
         */
        getVideos () {
            return this.getVideoArr || []
        }
    },
    methods: {

    }
}
</script>
