<template>
  <div class="home">
    <Side/>
    <Toggle/>
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

    @media screen and (max-width: 767px){
        margin-left:0;
    }
}

</style>

<script>
import Header from './components/header'
import Main from './components/main'
import Side from './components/side'
import Toggle from './components/toggle'

export default {
    name: 'Home',
    components: {
        Header,
        Main,
        Side,
        Toggle
    }
}
</script>
