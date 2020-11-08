<template>
    <div class="page-num">
        <ul class="group">
            <li @click="goFirst">1</li>
            <li @click="goPrev">{{'<<'}}</li>
            <li @click="goSpec(num)"
                v-for="num in getPageArr"
                :key="`p${num}`"
                :class="{active: num === getPage }">
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
        li:hover, .active {
            border-color: $hoverColor;
            background-color: $hoverColor;
            color: #EEE;
            cursor: pointer;
        }
    }
}

</style>

<script>
export default {
    name: 'pageNum',
    data () {
        return {
            NUM_PER_PAGE: 5, // 頁面上至多放幾個數字頁碼(奇數)
            centerPage: 3 // 中央頁碼
        }
    },
    watch: {
        // 頁碼變動時, 調整中央頁碼
        getPage (newPage) {
            // 頁碼初始化, 檢查最大頁數是否不足
            if (this.getMaxPage <= this.NUM_PER_PAGE) {
                return false
            }

            const HALF = ~~(this.NUM_PER_PAGE / 2)
            if (+newPage <= HALF) {
                // 中央頁碼初值
                this.centerPage = HALF + 1
            } else if (+newPage > HALF && newPage <= (this.getMaxPage - HALF)) {
                this.centerPage = +newPage
            } else {
                // 中央頁碼最大值
                this.centerPage = this.getMaxPage - HALF
            }
        }
    },
    computed: {
        /**
         * 根據中央頁碼產生顯示(ex: page=1 -> [1,2,3,4,5])
         * @returns {Array} 頁面上顯示的數字頁碼
         */
        getPageArr () {
            // 頁數很少, 不滿一組
            if (this.getMaxPage <= this.NUM_PER_PAGE) {
                return [...Array(this.getMaxPage)].map((v, idx) => idx + 1)
            }
            return [this.centerPage - 2, this.centerPage - 1, this.centerPage, this.centerPage + 1, this.centerPage + 2]
        }
    },
    methods: {
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
