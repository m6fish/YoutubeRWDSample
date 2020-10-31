<script>
import pageNumOri from '../components/pageNum'
import { createNamespacedHelpers } from 'vuex'
const STORE_NAME = 'Hall'
const { mapGetters, mapActions } = createNamespacedHelpers(`${STORE_NAME}/`)

export default {
    name: 'pageNum',
    extends: pageNumOri,
    computed: {
        ...mapGetters([
            'getPage',
            'getMaxPage'
        ])
    },
    methods: {
        ...mapActions([
            'setPageNum',
            'fetchNextVideo'
        ]),
        goSpec (thePage) {
            this.setPageNum(+thePage)

            // 到底線前一筆時,向後要新資料
            if (thePage === this.getMaxPage - 1) {
                this.fetchNextVideo()
            }
        }
    }
}
</script>
