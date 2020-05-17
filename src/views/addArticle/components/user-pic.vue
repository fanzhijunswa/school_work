<template lang="pug">
.user-pic
    el-card(class="box-start")
        .header(slot="header" class="clearfix")
            h3 素材管理
        .body
            .img-single(v-for="{imgUrl,id} in userPic" :key="id")
                img(:src="imgUrl")

</template>

<script>

import { getUserPic } from 'api/article'
export default {
  data () {
    return {
      userPic: []
    }
  },
  async created () {
    await this.getData()
  },
  methods: {
    getData () {
      return Promise.all([this.getImgArr()]).catch(e => console.warn(e))
    },
    getImgArr () {
      return new Promise(async (resolve, reject) => {
        this.$loadingStart()
        try {
          this.userPic = await getUserPic()
          resolve()
        } catch (e) {
          this.userPic = []
          reject(e)
        }
        this.$loadingEnd()
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.box-start
    .body
        display: flex
        .img-single
            margin-right: 20px
            width: 200px
            height: 250px
            img
                width: 100%
                height: 100%
</style>
