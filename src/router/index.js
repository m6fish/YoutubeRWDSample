import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@V/Home'

Vue.use(VueRouter)

/**
 * @param {String} meta.title [多語key]頁面標題
 */

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/hall',
        meta: {
            title: 'Hall'
        },
        component: Home,
        children: [{
            // 大廳
            path: '/hall',
            name: 'Hall',
            meta: {
                title: 'Hall',
                icon: 'fa-video'
            },
            component: r => require.ensure([], () => r(require('@V/Home/Hall')), 'Hall')
        }, {
            // 播放頁
            path: '/playing',
            name: 'Playing',
            meta: {
                title: 'Playing',
                icon: 'fa-play-circle'
            },
            component: r => require.ensure([], () => r(require('@V/Home/Playing')), 'Playing')
        }, {
            // 收藏頁
            path: '/favorites',
            name: 'Favorites',
            meta: {
                title: 'Favorites',
                icon: 'fa-heart'
            },
            component: r => require.ensure([], () => r(require('@V/Home/Favorites')), 'Favorites')
        }]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// 換頁後更新document.title
const MAIN_TITLE = 'MyTube'
router.afterEach((to) => {
    const { title } = to.meta
    document.title = title ? `${title} - ${MAIN_TITLE}` : MAIN_TITLE
})

export default router
