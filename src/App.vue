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
         * @param {Array} storeArr 要註冊的store資料array, e.g. [{name, newStore}]
         * @param {String} storeArr[index].name 新store名稱
         * @param {Object} storeArr[index].newStore 新store物件
         */
        addStore (storeArr) {
            storeArr.forEach(({ name, newStore }) => {
                if (!this.$store._modules.root.getChild(name)) {
                    this.$store.registerModule(name, newStore)
                }
            })
        },
        /**
         * 把指定store從當前列表移除
         * @param {Array} storeArr 要刪除的store名稱array, e.g. [name]
         */
        removeStore (storeArr) {
            storeArr.forEach((name) => {
                if (this.$store._modules.root.getChild(name)) {
                    this.$store.unregisterModule(name)
                }
            })
        }
    }
}
</script>
