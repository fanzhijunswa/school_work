<template lang="pug">
.articleList
    el-card(class="box-top")
        .clearfix(slot="header")
            span 全部图文
        .text(class="item")
            el-form(ref="searchFormRef" :model="articleListForm" label-width="100px")
                el-form-item(label="频道列表")
                    channel-select(@changeSelect="articleListForm.channel = $event")
                el-form-item(label="时间选择")
                    el-date-picker(
                        v-model="timetotime"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        value-format="yyyy-MM-dd"
                        clearable)
    el-card(class="box-down")
        .clearfix(slot="header")
            span 共找到{{ articleTable.length }}条符合条件的内容
        .text(class="item")
            el-table(:data="articleTable" cell-class-name="table-cell")
                el-table-column(label="标题" prop="title")
                el-table-column(label="图片" prop="article_img")
                    template(slot-scope="scope" v-if="scope.row.article_img.length")
                        .ceshi(v-for="(item,index) in scope.row.article_img" :key="index")
                            img(:src="item" alt="节哀节哀")
                    .text-img(v-else) haha
                        //- img(src="ghjghj" alt="没有图片")
                el-table-column(label="内容")
                    template(slot-scope="scope")
                        .content(v-html="scope.row.content")
                el-table-column(label="操作")
                    template(slot-scope="scope")
                        el-button(type="primary" size="small") 编辑
                        el-button(type="danger" size="small" @click="delArticle(scope.row._id)") 删除
</template>

<script>
import ChannelSelect from '@/components/channel-select'
import { getArticleList, delArticle } from 'api/article'
export default {
  components: {
    ChannelSelect
  },
  data () {
    return {
      articleListForm: {
        channel: '',
        selectData: []
      },
      timetotime: '',
      articleTable: []
    }
  },
  async created () {
    await this.getData()
  },
  methods: {
    async delArticle (id) {
      try {
        await delArticle(id)
        this.$message.success('删除成功')
        await this.getTableList()
      } catch (e) {
        this.$message.error('删除失败,错误日志为+', e)
      }
    },
    getData () {
      return Promise.all([this.getTableList()]).catch(e => console.warn(e))
    },
    getTableList () {
      return new Promise(async (resolve, reject) => {
        this.$loadingStart()
        try {
          this.articleTable = await getArticleList()
          resolve()
        } catch (e) {
          this.articleTable = []
          reject(e)
        }
        this.$loadingEnd()
      })
    }
  },
  watch: {
    timetotime: {
      handler (newV) {

      },
      deep: true
    }
  }
}
</script>

<style style="scss" scoped>
.el-table /deep/ .el-table__header-wrapper thead th{
    text-align: center;
}
.el-table /deep/ .cell {
    display: flex;
    justify-content: center;
}
</style>
<style lang="sass" scoped>
.box-top
    margin-bottom: 20px
.box-down
    .ceshi
        width: 200px
        height: 200px
        img
            width: 100%
            height: 100%
</style>
