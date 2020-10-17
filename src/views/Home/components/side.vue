<template>
    <div class="side">side</div>
</template>

<style lang="scss">
.side {
    position: fixed;
    width: 60px;
    height: 100%;
    background-color: wheat;
    transition: 0.5s;
    overflow: hidden;
}
.side:hover {
    width: 300px;
}
</style>

<script>
export default {
    name: 'side'
}
</script>
