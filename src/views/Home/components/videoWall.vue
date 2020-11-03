<template>
    <div class="video-wall">
        <div v-for="(oneVideo, vidx) in getVideos" :key="`v${vidx}`" class="video-box" @click="goPlaying(oneVideo)">
            <div class="v_pic" :style="{background: `url(${oneVideo.pic})`}">
                <span class="pic_duration">{{oneVideo.duration}}</span>
            </div>
            <div class="v_detail" :class="{active: isActive(oneVideo.id)}"  @click.stop="setFavo(oneVideo)">
                <div class="detail_des">{{oneVideo.title}}</div>
                <div class="detail_des">{{oneVideo.description}}</div>
                <div class="detail_favo">
                    <i class="far fa-heart"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$hoverColor: red;

.video-wall {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    @media screen and (min-width: 1745px) and (max-width: 1920px) {
        padding: 0 10%;
    }
    @media screen and (min-width: 910px) and (max-width: 1085px) {
        padding: 0 10%;
    }

    .video-box {
        margin: 10px 1%;
        width: 23%;
        margin-bottom: 40px;

        @media screen and (max-width: 1425px) {
            width: 31%;
        }
        @media screen and (max-width: 1085px) {
            width: 48%;
        }
        @media screen and (max-width: 730px) {
            width: 98%;
        }

        .v_pic, .v_detail {
            margin: 0 auto;
            width: 320px;
        }

        .v_pic {
            height: 180px;
            position: relative;
            cursor: pointer;
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

            &:hover{
                .pic_duration {
                    color: $hoverColor;
                }
            }
        }

        .v_detail {
            margin-top: 5px;

            .detail_des {
                width: 95%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                margin: 0;
                display: inline-block;
                font-size: 1rem;
                font-weight: 500;
                color: #030303;
            }
            .detail_favo {
                float: right;
                color:#CCC;
            }

            &:hover, &.active {
                .detail_des, .detail_favo {
                    color: $hoverColor;
                    cursor: pointer;
                    transition: 0.2s;
                }
            }
        }
    }

}
</style>

<script>
import { mapActions as rootActions } from 'vuex'

export default {
    name: 'VideoWall',
    computed: {
        /**
         * [等待繼承] 取得影片列表
         */
        getVideos () {
            return []
        }

    },
    methods: {
        ...rootActions([
            'SET_USER_PLAY'
        ]),
        /**
         * [等待繼承] 加入蒐藏
         */
        setFavo (videoData) {},
        /**
         * [等待繼承] 是否已被收藏
         * @returns {Boolean} {true: YES, false: NO}
         */
        isActive (vID) {
            return false
        },
        /**
         * 前往播放頁
         * @param {Object} videoData the video
         */
        goPlaying (videoData) {
            this.SET_USER_PLAY(videoData)
            this.$router.push({ name: 'Playing' })
        }
    }
}
</script>
