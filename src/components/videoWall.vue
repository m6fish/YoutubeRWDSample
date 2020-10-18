<template>
    <div class="video-wall">
        <div v-for="(oneVideo, vidx) in getVideoArr" :key="`v${vidx}`" class="video-box">
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
        // TODO: 暫時顯示用, 之後會從getter拿
        getVideoArr () {
            return [{
                title: 'A1',
                pic: 'someURL/pic.png',
                vidoeLength: '',
                description: ''
            }, {
                title: 'A2',
                pic: 'someURL/pic.png',
                vidoeLength: '',
                description: ''
            }]
        }
    },
    methods: {
        addFavo (videoId) {
            console.log('add favorite')
        }
    }
}
</script>
