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
import { createNamespacedHelpers, mapActions as rootActions } from 'vuex'
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
        // this.SEND_AJAX(['get', 'https://api.kcg.gov.tw/api/service/Get/b4dd9c40-9027-4125-8666-06bef1756092'])
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
