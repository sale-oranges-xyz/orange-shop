<style lang="less" scoped>

</style>

<template>
  <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="500">
    <div v-for="(item, index) in page.content" :key="index"> <!--page.content-->
      <slot :row="item" :$index="index" />
    </div>
  </van-list>
</template>

<script>
// components
import { List } from 'vant';
// api
import PageUtil from '@/utils/pageUtil';
export default {
  name: 'v-van-list',
  desc: '封装上拉加载更多组件',
  components: {
    [List.name]: List
  },
  props: {
    /** 请求url */
    url: {
      type: String,
      default: ''
    },
    /** 请求参数 */
    params: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      loading: false,
      finished: false,
      // list: [], // 测试list
      page: {
        content: [], // 分页数据
        currentPage: 0, // 当前页
        totalPage: -1 // 总分页
      }
    };
  },
  methods: {
    onLoad() {
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   this.loading = false;
      //
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 500);
      // console.log('11111');
      // 已经到达最后一页
      if (this.page.totalPage !== -1 && this.page.currentPage === this.page.totalPage) {
        this.loading = false;
        this.finished = true;
        return false;
      }
      // console.log('2222');
      // 模拟加载逻辑
      setTimeout(() => {
        this.params.currentPage = this.page.currentPage;
        PageUtil.getPage(this.url, this.params).then((res) => {
          // console.log('res', res);
          this.page.content = this.page.content.concat(res.dataList);
          // console.log('加载数据');
          this.page.currentPage = res.currentPage;
          this.page.totalPage = res.totalPage;
          // console.log('page.content', this.page);
          this.loading = false;
        });
      }, 500);
    }
  }
};
</script>
