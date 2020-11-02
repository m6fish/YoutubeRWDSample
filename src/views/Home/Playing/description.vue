<template>
  <div class="desc">
      <div class="title">{{getVideoMeta.title}}</div>
      <div class="des">{{getVideoMeta.description}}</div>
  </div>
</template>

<script>
import { createNamespacedHelpers, mapGetters as rootGetters } from 'vuex'
const { mapGetters: favoGetters } = createNamespacedHelpers('Favo/')

export default {
    name: 'description',
    computed: {
        ...rootGetters([
            'getUserPlay'
        ]),
        ...favoGetters([
            'getFavoListAll'
        ]),
        getVideoMeta () {
            const { id, title, description } = this.getUserPlay
            const fromFavo = this.getFavoListAll[0]

            if (id) {
                return {
                    title,
                    description
                }
            } else if (fromFavo) {
                // 無ID, 直接取收藏頁第一筆撥放
                return {
                    title: fromFavo.title,
                    description: fromFavo.description
                }
            }
            // 資料不存在,回大廳
            alert('The video has not found!')
            this.$router.replace({ name: 'Hall' })
            return {
                title: '',
                description: ''
            }
        }
    }
}
</script>
