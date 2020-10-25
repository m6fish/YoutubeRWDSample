<template>
  <div class="hall">
      <videoWall/>
      <pageNum/>
  </div>
</template>

<script>

import videoWall from './videoWall'
import pageNum from './pageNum'
import Hall from '@S/Hall'
import Favo from '@S/Favorites'
import { createNamespacedHelpers } from 'vuex'
const STORE_NAME = 'Hall'
const { mapGetters, mapActions } = createNamespacedHelpers(`${STORE_NAME}/`)
const { mapActions: favoActions } = createNamespacedHelpers('Favo/')

export default {
    name: 'Hall',
    components: {
        videoWall,
        pageNum
    },
    beforeCreate () {
        const storeArr = [
            { name: 'Hall', newStore: Hall },
            { name: 'Favo', newStore: Favo }
        ]
        this.$root.$emit('add-store', storeArr)
    },
    beforeMount () {
        this.fetchVideoList('get')
        this.fetchFavorite()
    },
    beforeDestroy () {
        this.$root.$emit('remove-store', [STORE_NAME])
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
        ]),
        ...favoActions([
            'fetchFavorite'
        ])
    }
}
</script>
