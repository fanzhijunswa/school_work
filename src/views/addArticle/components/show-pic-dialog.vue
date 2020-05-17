<template lang="pug">
.show-pic-dialog
    ul.show-pic-all
        li.show-pic-single(v-for="{imgUrl,id} in imgArr" :keys="id" @click="chooseImg([...arguments][0],id)")
            img(:src="imgUrl" class="img-single")
</template>

<script>
import _ from 'lodash'
import { getUserPic } from 'api/article'
export default {
  props: {
    sendDataFlag: Boolean,
    showDialog: Boolean,
    no: Number
  },
  watch: {
    showDialog (newV) {
      !newV || this.clearImg()
    },
    sendDataFlag (newV) {
      if (newV) {
        this.$emit('sendData', this.chooseImgStr)
        this.$nextTick(() => this.$emit('update:sendDataFlag', false))
      }
    }
  },
  data () {
    return {
      imgArr: [],
      chooseImgStr: ''
    }
  },
  async created () {
    await this.getData()
  },
  methods: {
    clearImg () {
      const all = document.querySelectorAll('.img-single')
      all.forEach(item => { item.style.border = 0 })
    },
    chooseImg (event, id) {
      const data = _.find(this.imgArr, item => item.id === id) || {}
      this.chooseImgStr = data
      this.clearImg()
      event.target.style.border = '2px solid #f00'
    },
    getData () {
      return Promise.all([this.getImgArr()]).catch(e => console.warn(e))
    },
    getImgArr () {
      return new Promise(async (resolve, reject) => {
        this.$loadingStart()
        try {
          this.imgArr = await getUserPic()
          resolve()
        } catch (e) {
          this.imgArr = []
          reject(e)
        }
        this.$loadingEnd()
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.show-pic-all
    width: 840px
    overflow: hidden
    .show-pic-single
        margin-right: 10px
        margin-bottom: 10px
        width: 200px
        height: 200px
        float: left
        cursor: pointer
        img
            width: 100%
            height: 100%
</style>
