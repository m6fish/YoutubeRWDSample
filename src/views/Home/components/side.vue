<template>
    <div class="side" :class="{'side-active': getMenuActive}">
        <ul class="routes" v-for="(group, gID) in getMenu" :key="`G-${gID}`">
            <li class="r_item" v-for="(oneMenu, mID) in group.children" :key="mID">
                <router-link :to="oneMenu.name" :class="{active: getRouteName === oneMenu.name}">
                    <i :class="`fas ${oneMenu.icon}`"></i>
                    <span>{{oneMenu.title}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

$iconHeight: 32px;
$liHeight: 60px;
$itemActiveColor: #f00;
$itemActiveBGColor: #484a47;

.side {
    position: fixed;
    width: 60px;
    height: 100%;
    background-color: wheat;
    transition: 0.5s;
    overflow: hidden;
    z-index: 3100;

    ul {
        position: absolute;
        width: 100%;
        left: 0;
        padding: 0;
        li {
            list-style: none;

            a {
                padding-left: 10px;
                color: #606060;
                height: $liHeight;
                line-height: $liHeight;
                display:flex;
                align-items: center;

                i {
                    width: $iconHeight;
                    margin: 0 4px;
                    font-size: $iconHeight;
                }
                span {
                    margin-left: 10px;
                    text-align: center;
                    font-size: 20px;
                }
            }

            a:hover, .active {
                color:$itemActiveColor;
                background: $itemActiveBGColor;
            }

            &+li {
                // margin-top: 20px;
            }
        }
    }

    &:hover, &.side-active {
        width: 250px;
    }

    @media screen and (max-width: 767px){
        left: -60px;
        &.side-active {
            left:0px;
            width: 100%;
        }
    }
}

</style>

<script>
import { mapGetters as rootGetters } from 'vuex'

export default {
    name: 'Side',
    computed: {
        ...rootGetters([
            'getMenuActive'
        ]),
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
