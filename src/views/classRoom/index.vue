<template lang="pug">
.classRoom
    template(v-for="item in classArr")
        class-room-card(:colArr="colArr" :roomOption="item")
</template>
<script>
import _ from 'lodash'
import ClassRoomCard from './components/classRoom-card'
export default {
  name: 'classRoom',
  components: {
    ClassRoomCard
  },
  data () {
    return {
      classRoomLoading: false,
      circleArr: [],
      classRoomMsgAll: {}
    }
  },
  async created () {
    this.classRoomLoading = true
    await this.getData()
    // await this.ceshi()
  },
  computed: {
    colArr () {
      const { colArr = [] } = this.get(this, 'classRoomMsgAll.data.data', [])
      return colArr
    },
    classArr () {
      const { classArr = [] } = this.get(this, 'classRoomMsgAll.data.data', [])
      return classArr
    }
  },
  methods: {
    get: _.get,
    getClassRoom () {
      return new Promise(resolve => {
        this.$http.get('/classRoom', { params: { filter: 2 } }).then(resp => {
          this.classRoomMsgAll = resp
          this.classRoomLoading = false
          resolve()
        })
      })
    },
    getData () {
      return Promise.all([this.getClassRoom()]).catch(e => console.log(e))
    },
    // getClassRoom () {
    //   return new Promise((resolve, reject) => {
    //     this.$http.get('/getClassRoom').then(resp => {
    //       this.circleArr = _.get(resp, 'data.data', [])
    //     }, e => reject(e))
    //   })
    // },
    showYep ({ value, flag, use }) {
      const showYepFlag = _.findIndex(this.classRoomArr, item => item === value)
      //   避免选中后的指标，鼠标悬停上面还会触发的情况
      /**
      * 业务逻辑 :
      * 1. use 代表的是 后台返回的已经被选中的数据,那么不可以触发
      * 2. classRoomArr 是我们选中的指标数组，如果数据一旦包含当前悬停项，那么不做处理
       */
      if (use || showYepFlag !== -1) {
        return false
      }
      document.querySelector('.' + value).style.cursor = flag ? 'pointer' : 'default'
      document.getElementById(value).style.display = flag ? 'block' : 'none'
      document.querySelector('.' + value).style.border = flag ? '1px dashed #22B678' : '1px solid #CCCCCC'
    },
    sureClick ({ value, use }) {
      /**
        * 业务逻辑
        * 1.这个flag判断当前我们点击的时候，指标是否存在，如果存在则取消，反之添加
        */
      if (use) {
        return false
      }
      const flag = _.findIndex(this.classRoomArr, item => item === value)
      // document.querySelector('.' + value).style.backgroundColor = flag !== -1 ? 'white' : '#22B678'
      document.querySelector('.' + value).style.border = flag !== -1 ? '1px solid #CCCCCC' : 0
      document.getElementById(value).style.display = flag !== -1 ? 'block' : 'none'
      flag !== -1 ? this.classRoomArr.splice(flag, 1) : this.classRoomArr.push(value)
      console.log(this.classRoomArr)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~styles/_color.sass'
.classRoom
    width: 100%
    height: 1680px
    // overflow: hidden

</style>
