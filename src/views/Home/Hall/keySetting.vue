<template>
    <div class="key-setting">
        <input v-model='key' type="text" placeholder="Your Youtube API Key">
        <div class="savebtn" @click="saveKey">SAVE</div>
    </div>
</template>

<style lang="scss" scoped>

.key-setting {
    text-align: center;
    padding-top: 20px;
    input {
        background: #FFF;
        border: 1px solid #CCC;
        width: 700px;
        line-height: 20px;
    }
    .savebtn {
        display: inline-block;
        padding: 4px 10px;
        background: #eaeaea;
        border-radius: 3px;
        margin-left: 5px;
        cursor: pointer;
        &:hover {
            background: #9a8f97;
            color: white;
        }
    }
}

</style>

<script>
import { createNamespacedHelpers, mapActions as rootActions } from 'vuex'
const STORE_NAME = 'Hall'
const { mapActions } = createNamespacedHelpers(`${STORE_NAME}/`)

export default {
    name: 'KeySetting',
    data () {
        return {
            key: ''
        }
    },
    methods: {
        ...rootActions([
            'SET_API_KEY'
        ]),
        ...mapActions([
            'fetchVideoList'
        ]),
        saveKey () {
            this.SET_API_KEY(this.key)
            this.fetchVideoList('get')
        }
    }
}
</script>
