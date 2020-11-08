<template>
    <div class="hall">
        <template v-if="getAllVideo.length">
            <videoWall/>
            <pageNum/>
        </template>
        <div v-else class="empty">It's empty.</div>
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
    },
    computed: {
        ...mapGetters([
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
