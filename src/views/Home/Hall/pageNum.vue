<template>
    <div class="page-num">
        <ul class="group">
            <li @click="goFirst">1</li>
            <li @click="goPrev">{{'<<'}}</li>
            <li @click="goSpec(num)" v-for="num in getPageArr" :key="`p${num}`">
                {{num}}
            </li>
            <!-- TODO:加入disable邏輯&樣式 -->
            <li @click="goNext">{{'>>'}}</li>
            <li @click="golast">{{getMaxPage}}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
$hoverColor: #616161;

.page-num {
    text-align: center;

    .group {
        padding:0;
        margin: 0 auto;
        display: inline-block;
        li {
            list-style: none;
            width: 50px;
            border-radius: 5px;
            border: 1px solid #CCC;
            float: left;
            padding: 10px 5px;
            box-sizing:border-box;
            &+li{
                margin-left: 10px;
            }
        }
        li:hover {
            border-color: $hoverColor;
            background-color: $hoverColor;
            color: #EEE;
            cursor: pointer;
        }
    }
}

</style>

<script>
import { createNamespacedHelpers } from 'vuex'
const STORE_NAME = 'Hall'
const { mapGetters, mapActions } = createNamespacedHelpers(`${STORE_NAME}/`)

export default {
    name: 'pageNum',
    data () {
        return {
            NUM_PER_PAGE: 5, // 頁面上至多放幾個數字頁碼
            centerPage: 3 // 中央頁碼
        }
    },
    computed: {
        ...mapGetters([
            'getPage',
            'getMaxPage'
        ]),
        /**
         * 根據當前頁數產生頁面上顯示的數字頁碼(ex: page=1 -> [1,2,3,4,5])
         * @returns {Array} 頁面上顯示的數字頁碼
         */
        getPageArr () {
            // 頁碼初始化, 檢查最大頁數是否不足
            if (this.getPage === 1 || this.getMaxPage <= this.NUM_PER_PAGE) {
                const pages = this.getMaxPage > this.NUM_PER_PAGE ? this.NUM_PER_PAGE : this.getMaxPage
                return [...Array(pages)].map((v, idx) => idx + 1)
            }

            const shift = this.getPage - this.centerPage
            const oldArr = this.getPageArr.slice(0)
            if (shift > 0) {
                // 往前
                if (![1, 2].includes(this.getPage)) {
                    return oldArr.map(old => old + shift)
                }
            } else if (shift < 0) {
                // 往後
                if (![this.getMaxPage - 1, this.getMaxPage - 2].includes(this.getPage)) {
                    return oldArr.map(old => old + shift)
                }
            }

            return oldArr
        }
    },
    methods: {
        ...mapActions([
            'setPageNum'
        ]),
        goFirst () {
            this.setPageNum(1)
        },
        goPrev () {
            // 頁碼最小值回到1
            this.setPageNum(this.getPage - 1 || 1)
        },
        goSpec (thePage) {
            this.setPageNum(+thePage)
        },
        goNext () {
            const thePage = this.getPage + 1
            // 最大值不可超過 this.getMaxPage
            this.setPageNum(thePage > this.getMaxPage ? this.getMaxPage : thePage)
        },
        golast () {
            this.setPageNum(this.getMaxPage)
        }
    }
}
</script>
