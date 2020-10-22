<template>
    <div class="video-wall">
        <div v-for="(oneVideo, vidx) in getVideos" :key="`v${vidx}`" class="video-box">
            <div>
                <img :src="oneVideo.pic">
                <span class="v_length">{{oneVideo.vidoeLength}}</span>
            </div>
            <div>
                <div class="v_des">{{oneVideo.description}}</div>
                <div class="v_func">
                    <!-- TODO: 加入ICON -->
                    <span @click="addFavo">收</span>
                </div>
            </div>
        </div>
    </div>
</template>

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
        }
    }
}
</script>
