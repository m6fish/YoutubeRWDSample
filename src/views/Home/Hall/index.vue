<template>
  <div class="hall">
      <videoWall :video-arr="getVideoArr" />
      <div>{{getPage}}</div>
  </div>
</template>

<style lang="scss">

</style>

<script>

import videoWall from './videoWall'
import Hall from '@S/Hall'
import { createNamespacedHelpers } from 'vuex'
const STORE_NAME = 'Hall'
const { mapGetters, mapActions } = createNamespacedHelpers(`${STORE_NAME}/`)

export default {
    name: 'Hall',
    components: {
        videoWall
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
            'getVideoArr'
        ])
    },
    methods: {
        ...mapActions([
            'fetchVideoList'
        ])
    }
}
</script>
