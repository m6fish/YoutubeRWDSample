<template>
  <div class="hall">
      <videoWall/>
      <div>{{getPage}}</div>
  </div>
</template>

<style lang="scss">

</style>

<script>

import videoWall from '@C/videoWall'
import Hall from '@S/Hall'
import { createNamespacedHelpers } from 'vuex'
const STORE_NAME = 'Hall'
const { mapGetters } = createNamespacedHelpers(`${STORE_NAME}/`)

export default {
    name: 'Hall',
    components: {
        videoWall
    },
    beforeCreate () {
        this.$root.$emit('add-store', { name: 'Hall', newStore: Hall })
    },
    beforeDestroy () {
        this.$root.$emit('remove-store', STORE_NAME)
        // TODO: RESET data
    },
    computed: {
        ...mapGetters([
            'getPage'
        ])
    }
}
</script>
