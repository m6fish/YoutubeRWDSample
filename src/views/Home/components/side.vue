<template>
    <div class="side">
        <ul class="routes" v-for="(group, gID) in getMenu" :key="`G-${gID}`">
            <li class="r_item" v-for="(oneMenu, mID) in group.children" :key="mID">
                <router-link :to="oneMenu.name">
                    <i :class="`fas ${oneMenu.icon}`"></i>
                    <span>{{oneMenu.title}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

$itemHeight: 32px;
$itemActiveColor: #f00;

.side {
    position: fixed;
    width: 60px;
    height: 100%;
    background-color: wheat;
    transition: 0.5s;
    overflow: hidden;
    padding-top: 20px;

    ul {
        position: absolute;
        width: 100%;
        left: 10px;
        padding: 0;
        li {
            list-style: none;

            a {
                color: #606060;
                height: $itemHeight;
                line-height: $itemHeight;
                display:flex;
                align-items: center;

                i {
                    width: $itemHeight;
                    margin: 0 4px;
                    font-size: $itemHeight;
                }
                span {
                    margin-left: 10px;
                    text-align: center;
                    font-size: 20px;
                }
            }

            a:hover {
                color:$itemActiveColor;
            }

            .router-link-active {
                color: $itemActiveColor;
            }

            &+li {
                margin-top: 20px;
            }
        }
    }
}
.side:hover {
    width: 250px;
}

</style>

<script>
export default {
    name: 'Side',
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
                    const { title, icon } = meta
                    oneGroup.children.push({
                        name,
                        title,
                        icon
                    })
                })
                menuArr.push(oneGroup)
            }, [])
            return menuArr
        },
        /**
         * 取得當前頁面的Route name
         */
        getRouteName () {
            return this.$route.name
        }
    }
}
</script>
