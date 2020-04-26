<template lang="pug">
.home
    h2 我是首页
    .ceshi
        el-button(type="primary") 发送请求
</template>

<script>
import _ from 'lodash'
export default {
  name: 'home',
  data () {
    return {
      movieData: [],
      peopleArr: []
    }
  },
  async created () {
    await this.getDataAll()
  },
  methods: {
    getDataAll () {
      return Promise.all([this.getMovieData(), this.getIndex(), this.getCircle()]).catch(e => console.log('请求失败,失败日志为:', e))
    },
    getMovieData () {
      return new Promise((resolve, reject) => {
        this.$http.get('/getMovie').then(resp => {
          this.movieData = _.get(resp, 'data.data', [])
          console.log(this.movieData)
          resolve()
        }, e => reject(e))
      })
    },
    getIndex () {
      return new Promise((resolve, reject) => {
        this.$http.get('/get').then(resp => {
          console.log(resp.data.data)
          resolve()
        }, e => reject(e))
      })
    },
    getCircle () {
      return new Promise((resolve, reject) => {
        this.$http.get('find', { params: { name: '机器人0' } }).then(resp => {
          this.peopleArr = _.get(resp, 'data.result', [])
          console.log(this.peopleArr)
          resolve()
        }, e => reject(e))
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/_color.sass'
h2
    color: $color-purple
</style>
