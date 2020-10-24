<template>
    <div class="header">
        <div class="title">{{getTitle}}</div>
    </div>
</template>

<style lang="scss">
.header {
    height: 50px;
}
</style>

<script>
export default {
    name: 'Header',
    computed: {
        // 取得當前頁面的標題
        getTitle () {
            const { meta } = this.$route
            return meta.title
        }
    }
}
</script>
