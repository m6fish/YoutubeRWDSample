<template>
    <div class="header">
        <h1 class="title">{{getTitle}}</h1>
    </div>
</template>

<style lang="scss">
.header {
    align-items: center;
    box-sizing: border-box;
    background: rgb(255 255 255 / 0.98);
    display:flex;
    height: 60px;
    padding: 0 20px;
    position: fixed;
    top:0;
    width: calc(100% - 60px);
    z-index: 2100;

    .title {
        font-size: 1.5rem;
    }
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
