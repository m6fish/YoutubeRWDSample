<template>
  <div class="playing">
        <video-player />
        <description />
  </div>
</template>

<style lang="scss">

.playing {
    padding: 0 10%;
    @media screen and (max-width: 980px) {
        padding: 0 5%;
    }
    @media screen and (max-width: 400px) {
        padding: 10px;
    }

    &.rotate{
        -moz-transform:rotate(90deg);
        -webkit-transform:rotate(90deg);
        -o-transform:rotate(90deg);
        -ms-transform:rotate(90deg);
        transform:rotate(90deg);
    }
}
</style>

<script>
import videoPlayer from './videoPlayer'
import description from './description'
import Favo from '@S/Favorites'
import Play from '@S/Playing'
const STORE_NAME = 'Play'

export default {
    name: 'Playing',
    components: {
        videoPlayer,
        description
    },
    beforeCreate () {
        const storeArr = [
            { name: 'Play', newStore: Play },
            { name: 'Favo', newStore: Favo }
        ]
        this.$root.$emit('add-store', storeArr)
    },
    beforeDestroy () {
        this.$root.$emit('remove-store', [STORE_NAME])
    }
}
</script>
