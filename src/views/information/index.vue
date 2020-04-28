<template lang="pug">
.information
  h2(v-for="item in setInformation" :key="item.tid") {{ item.textAll }}
  el-button(type="primary" @click="getInformation") 提交
</template>
<script>
import _ from 'lodash'
export default {
  name: 'information',
  components: {

  },
  data () {
    return {
      sinceId: '',
      card: 1,
      informationArr: []
    }
  },
  computed: {
    setInformation () {
      const { informationArr } = this
      if (!informationArr.length) {
        return []
      }
      const finalArr = []
      _.forEach(informationArr, item => {
        const arr = item.textAll.split(' ')
        let newArr = []
        _.forEach(arr, item => {
          if (item.indexOf('#') === -1) {
            newArr = [...newArr, item]
          }
        })
        const newStr = newArr.join('')
        finalArr.push({ text: item.text, textAll: newStr, tid: item.tid })
      })
      return finalArr
    }
  },
  async created () {
    await this.getData()
  },
  methods: {
    getInformation () {
      this.card++
      this.getData()
    },
    getData () {
      return Promise.all([this.getWeiBo()]).catch(e => console.log(e))
    },
    getWeiBo () {
      return new Promise(resolve => {
        const { sinceId, card } = this
        this.$http.get('/information/getweibo', { params: { sinceId, card } }).then(resp => {
          this.sinceId = _.get(resp, 'data[0].sinceId', '')
          this.informationArr = _.get(resp, 'data[0].data', [])
          // console.log(this.sinceId)
          console.log(resp)
          resolve()
        })
      })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
