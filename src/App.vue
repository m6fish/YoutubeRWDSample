<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'app',
    beforeMount () {
        this.$root.$on('add-store', this.addStore)
        this.$root.$on('remove-store', this.removeStore)
    },
    beforeDestroy () {
        this.$root.$off('add-store', this.addStore)
        this.$root.$off('remove-store', this.removeStore)
    },
    methods: {
        /**
         * 把新stroe註冊到當前列表
         * @param {String} param.name 新store名稱
         * @param {Object} param.newStore 新store物件
         */
        addStore ({ name, newStore }) {
            if (!this.$store._modules.root.getChild(name)) {
                this.$store.registerModule(name, newStore)
            }
        },
        /**
         * 把指定store從當前列表移除
         * @param {String} theStroe store名稱
         */
        removeStore (theStroe) {
            if (this.$store._modules.root.getChild(theStroe)) {
                this.$store.unregisterModule(theStroe)
            }
        }
    }
}
</script>
