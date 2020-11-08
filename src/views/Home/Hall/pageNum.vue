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
        ])
    }
}
</script>
