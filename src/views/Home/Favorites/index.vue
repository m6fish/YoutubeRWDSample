<template>
    <div class="Favorites">
        <template v-if="getFavoIDs.length">
            <videoWall/>
            <pageNum/>
        </template>
        <div v-else class="empty">It's empty.</div>
    </div>
</template>

<script>
import videoWall from './videoWall'
import pageNum from './pageNum'
import Favo from '@S/Favorites'
import { createNamespacedHelpers } from 'vuex'
const STORE_NAME = 'Favo'
const { mapGetters, mapActions } = createNamespacedHelpers(`${STORE_NAME}/`)

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
    computed: {
        ...mapGetters([
            'getFavoIDs'
        ])
    },
    methods: {
        ...mapActions([
            'fetchFavorite'
        ])
    }
}
</script>
