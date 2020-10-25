<template>
  <div class="Favorites">
      <videoWall/>
      <pageNum/>
  </div>
</template>

<script>

import videoWall from './videoWall'
import pageNum from './pageNum'
import Favo from '@S/Favorites'
import { createNamespacedHelpers } from 'vuex'
const STORE_NAME = 'Favo'
const { mapActions } = createNamespacedHelpers(`${STORE_NAME}/`)

export default {
    name: 'Favorites',
    components: {
        videoWall,
        pageNum
    },
    beforeCreate () {
        const storeArr = [{ name: 'Favo', newStore: Favo }]
        this.$root.$emit('add-store', storeArr)
    },
    beforeMount () {
        this.fetchFavorite()
    },
    beforeDestroy () {
        // this.$root.$emit('remove-store', [STORE_NAME])
    },
    methods: {
        ...mapActions([
            'fetchFavorite'
        ])
    }
}
</script>
