<template>
    <div class="toggle" @click="toggleClick" :class="{active: getMenuActive}">
        <span v-if="!getMenuActive">=</span>
        <span v-else>X</span>
    </div>
</template>

<style lang="scss" scoped>
    .toggle {
        position: absolute;
        top: 0;
        right: 0;
        width: 60px;
        height: 60px;
        background: #ffee93;
        z-index: 3100;
        cursor: pointer;

        &:hover, &.active {
            background: #ffc09f;
        }
    }

</style>

<script>
import { mapActions as rootActions, mapGetters as rootGetters } from 'vuex'

export default {
    name: 'toggle',
    computed: {
        ...rootGetters([
            'getMenuActive'
        ])
    },
    methods: {
        ...rootActions([
            'SET_MENU_ACTIVE'
        ]),
        toggleClick () {
            this.SET_MENU_ACTIVE(!this.getMenuActive)
        }
    }
}
</script>
