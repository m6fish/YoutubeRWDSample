<template>
    <div class="toggle" @click="toggleClick" :class="{active: getMenuActive}">
    </div>
</template>

<style lang="scss" scoped>

$toggleActive: #9a8f97;
$toggleInactive: #eaeaea;

    .toggle {
        position: fixed;
        top: 0;
        right: 0;
        width: 60px;
        height: 60px;
        background: $toggleInactive;
        z-index: 4100;
        cursor: pointer;

        &:hover, &.active {
            background: $toggleActive;
        }

        &::before, &::after{
            content: '';
            display: block;
            position: absolute;
            border-radius: 3px;
            height: 2px;
            width: 25px;
            background: black;
            transition: all 0.5s ease-in-out;
        }
        &::before {
            top: 45%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        &::after {
            top: 55%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        &.active {
            &::before{
                top: 50%;
                transform: translate(-50%,-50%) rotate(135deg);
            }
            &::after {
                top: 50%;
                transform: translate(-50%,-50%) rotate(45deg);
            }
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
