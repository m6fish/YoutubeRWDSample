<template>
  <div class="home">
    <Side/>
    <div class="main-right">
        <Header/>
        <Main/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-right {
    height: 100vh;
    margin-left: 60px; // sidebar
    background-color: #F9F9F9;
}

</style>

<script>
import Header from './components/header'
import Main from './components/main'
import Side from './components/side'

export default {
    name: 'Home',
    components: {
        Header,
        Main,
        Side
    }
}
</script>
