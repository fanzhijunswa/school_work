<template lang="pug">
//- 记住这里要添加id，因为这个dashboard是要复用的,页面获取到的id是唯一的,我们要区分不同的dashboard，每个dashboard都要有唯一的id
div(:id="`home-dashboard-${id}`" :style="{height: setHeight}")
</template>
<script>
import _ from 'lodash'
export default {
  name: 'home-dashboard',
  components: {

  },
  data () {
    return {
      option: {}
    }
  },
  created () {
    this.num++
  },
  props: {
    setHeight: String,
    id: Number
  },
  async mounted () {
    await this.getData()
    const myChart = this.$echarts.init(document.getElementById(`home-dashboard-${this.id}`))
    myChart.setOption(this.option)
  },
  methods: {
    getData () {
      return Promise.all([this.getDashboard()]).catch(e => console.log(e))
    },
    getDashboard () {
      return new Promise((resolve, reject) => {
        this.$http.get('/getDashboardId', { params: { id: this.id } }).then(resp => {
          this.option = _.get(resp, 'data.data', [])
          resolve()
        }, e => reject(e))
      })
    }

  }
}
</script>

<style lang="sass" scoped>

</style>
