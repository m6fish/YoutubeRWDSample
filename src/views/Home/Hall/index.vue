<template>
  <div class="hall">
      <videoWall :video-arr="getAllVideo" />
      <pageNum/>
  </div>
</template>

<script>

import videoWall from './videoWall'
import pageNum from './pageNum'
import Hall from '@S/Hall'
import { createNamespacedHelpers } from 'vuex'
const STORE_NAME = 'Hall'
const { mapGetters, mapActions } = createNamespacedHelpers(`${STORE_NAME}/`)

export default {
    name: 'Hall',
    components: {
        videoWall,
        pageNum
    },
    beforeCreate () {
        this.$root.$emit('add-store', { name: 'Hall', newStore: Hall })
    },
    beforeMount () {
        this.fetchVideoList('get')
    },
    beforeDestroy () {
        this.$root.$emit('remove-store', STORE_NAME)
        // TODO: RESET data
    },
    computed: {
        ...mapGetters([
            'getPage',
            'getAllVideo'
        ])
    },
    methods: {
        ...mapActions([
            'fetchVideoList'
        ])
    }
}
</script>
