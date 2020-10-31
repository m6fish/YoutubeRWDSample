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
            NUM_PER_PAGE: 5, // 頁面上至多放幾個數字頁碼
            centerPage: 3, // 中央頁碼
            currentPageArr: [] // 當前的頁碼陣列
        }
    },
    computed: {
        /**
         * 根據當前頁數產生頁面上顯示的數字頁碼(ex: page=1 -> [1,2,3,4,5])
         * @returns {Array} 頁面上顯示的數字頁碼
         */
        getPageArr () {
            // 頁碼初始化, 檢查最大頁數是否不足
            if (this.getPage === 1 || this.getMaxPage <= this.NUM_PER_PAGE) {
                const pages = this.getMaxPage > this.NUM_PER_PAGE ? this.NUM_PER_PAGE : this.getMaxPage
                const newArr = [...Array(pages)].map((v, idx) => idx + 1)
                this.currentPageArr = newArr
                return newArr
            }

            const shift = this.getPage - this.centerPage
            const oldArr = this.currentPageArr.slice(0)
            let newArr = oldArr.slice(0)
            if (shift > 0) {
                // 往後
                const newLastPage = oldArr[this.NUM_PER_PAGE - 1] + shift
                newArr = newLastPage > this.getMaxPage ? oldArr : oldArr.map(old => old + shift)
                // set new centerPage
                this.centerPage += shift
            } else if (shift < 0) {
                // 往前
                const newFirstPage = oldArr[0] + shift
                newArr = newFirstPage < 1 ? oldArr : oldArr.map(old => old + shift)
                // set new centerPage
                this.centerPage += shift
            }

            this.currentPageArr = newArr
            return newArr
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
