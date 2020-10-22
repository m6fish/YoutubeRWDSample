<template>
    <div class="page-num">
        <ul class="group">
            <li @click="goFirst">1</li>
            <li @click="goPrev">{{'<<'}}</li>
            <li @click="goSpec"></li>
            <li @click="goNext">{{'>>'}}</li>
            <li @click="golast">10</li>
        </ul>
    </div>
</template>

<script>
import Hall from '@S/Hall'
import { createNamespacedHelpers } from 'vuex'
const STORE_NAME = 'Hall'
const { mapGetters, mapActions } = createNamespacedHelpers(`${STORE_NAME}/`)

export default {
    name: 'pageNum',
    data () {
        return {}
    },
    computed: {

    },
    methods: {
        goFirst () {
            console.log('goFirst')
        },
        goPrev () {
            console.log('goPrev')
        },
        goSpec () {
            console.log('goSpec')
        },
        goNext () {
            console.log('goNext')
        },
        golast () {
            console.log('golast')
        }
    }
}
</script>
