<template>
  <div>
    <el-table
      :data="tableData" :stripe="stripe" style="width: 100%">

    </el-table>

    <el-pagination
      :page-sizes="[10, 15, 20, 30]"
      :page-size="100"
      :total="400"
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
export default {
  props: {
    /** 请求链接 */
    url: {
      type: String,
      require: true
    },
    /** 是否为斑马纹，默认是 */
    stripe: {
      type: String,
      default: true
    }

  },
  data () {
    return {
      tableData: []
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
