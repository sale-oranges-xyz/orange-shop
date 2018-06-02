<style lang="less">
.el-table__empty-block { min-height: 15rem;}
</style>

<template>
  <div>

    <el-table :data="tableData" :stripe="stripe" >

      <img slot="empty" :src="emptyImg" style="height: 13rem;">

    </el-table>

    <el-pagination
      :page-sizes="[10, 15, 20, 30]"
      :page-size="pageData.pageSize"
      :total="pageData.total"
      layout="total, sizes, prev, pager, next, jumper"
      background
      class="pagination"
      @size-change="handleSizeChange"
      @prev-click="prevClick"
      @next-click="nextClick">
    </el-pagination>
  </div>
</template>

<script>
import EmptyImg from '@static/image/empty-img1.png'

export default {
  props: {
    /** 请求链接 */
    url: {
      type: String,
      require: true
    },
    /** 是否为斑马纹，默认是 */
    stripe: {
      type: Boolean,
      default: true
    }

  },
  data () {
    return {
      emptyImg: EmptyImg,
      tableData: [],
      pageData: {
        total: 0,
        pageSize: 0
      }
    }
  },
  methods: {
    /**
     * 调整分页大小
     */
    handleSizeChange () {

    },
    /**
     * 上一页
     */
    prevClick () {

    },
    /**
     * 下一页
     */
    nextClick () {

    }
  }
}
</script>

<style scoped lang="less">
  .pagination{margin-top: 5px;padding: 24px;background-color: var(--white)}
</style>
