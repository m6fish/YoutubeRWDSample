<template>
    <div class="video-wall">
        <div v-for="(oneVideo, vidx) in getVideos" :key="`v${vidx}`" class="video-box" @click="goPlaying(oneVideo.id)">
            <div>
                <div class="v_pic">
                    <img :src="oneVideo.pic">
                    <span class="pic_duration">{{oneVideo.duration}}</span>
                </div>
                <div class="v_detail">
                    <div class="detail_des">{{oneVideo.description}}</div>
                    <div class="detail_favo" @click="addFavo">
                        <i class="far fa-heart"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.video-wall {
    text-align: center;
    padding: 0 10%;

    .video-box {
        box-sizing:border-box;
        max-width: 25%;
        display: inline-block;
        margin-bottom: 40px;
        &+.video-box {
            margin-left: 20px;
        }
    }

    .v_pic {
        position: relative;
        .pic_duration {
            background: rgba(0,0,0,0.8);
            color: #FFF;
            border-radius: 2px;
            padding: 2px 4px;
            letter-spacing: 0.5px;
            position: absolute;
            bottom: 4px;
            right: 0;
            margin:4px;
            font-size: 1rem;
            line-height: 1rem;
        }
    }

    .v_detail {
        width: 320px;
        margin: 0 auto;

        .detail_des {
            width: 80%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin: 0;
            display: inline-block;
            font-size: 1.3rem;
            font-weight: 500;
            color: #030303;
        }
        .detail_favo {
            float: right;
            margin-right: 10px;
        }
    }

}
</style>

<script>
export default {
    name: 'VideoWall',
    computed: {
        /**
         * 取得影片列表, 等待被繼承
         */
        getVideos () {
            return []
        }
    },
    methods: {
        addFavo (videoId) {
            console.log('add favorite')
        },
        /**
         * 前往播放頁
         * @param {String} vID video id
         */
        goPlaying (vID) {
            console.log(vID)
            this.$router.push({ name: 'Playing', params: { id: vID } })
        }
    }
}
</script>
