<template>
    <div class="side">
        <ul class="routes" v-for="(group, gID) in getMenu" :key="`G-${gID}`">
            <li v-for="(oneMenu, mID) in group.children" :key="mID">
                <router-link :to="oneMenu.name">{{oneMenu.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.side {
    position: fixed;
    width: 60px;
    height: 100%;
    background-color: wheat;
    transition: 0.5s;
    overflow: hidden;

    ul {
        position: absolute;
        width: 100%;
        left: 0;
        padding: 0;
        li {
            // position: relative;
            list-style: none;
        }
    }
}
.side:hover {
    width: 300px;
}
</style>

<script>
export default {
    name: 'Side',
    beforeMount () {
        console.log(this.$router.options)
    },
    computed: {
        /**
         * 取得階層菜單項目
         * @return {Array} 菜單route陣列
         */
        getMenu () {
            const menuArr = []
            const { routes } = this.$router.options || {}
            routes.forEach(({ meta: rootMeta, children }) => {
                const oneGroup = {}
                children && children.forEach(({ name, meta }, mIdx) => {
                    if (mIdx === 0) {
                        // 菜單群組資訊
                        oneGroup.title = rootMeta.title
                        oneGroup.children = []
                    }

                    // 子菜單資訊
                    const { title } = meta
                    oneGroup.children.push({
                        name,
                        title
                    })
                })
                menuArr.push(oneGroup)
            }, [])
            return menuArr
        }
    }
}
</script>
