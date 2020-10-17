<template>
    <div class="main">
        <transition name="fade-transform" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<style lang="scss">

</style>

<script>
export default {
    name: 'Main'
}
</script>
