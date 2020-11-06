<template>
    <div class="main">
        <transition name="fade-transform" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<style lang="scss" scoped>
    .main {
        padding-top:60px;
        background-color: #F9F9F9;
    }
</style>

<script>
export default {
    name: 'Main'
}
</script>
