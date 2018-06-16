<style lang="less" scoped>

</style>

<template>
  <van-list v-model="loading" :finished="finished" @load="onLoad" class="bg-white">
    <div v-for="(item, index) in list" :key="index">
      <slot :row="item" :$index="index"/>
    </div>
    <!-- <div v-show="finished" class="el-dialog--center">-- 够了，这是我的底线 --</div> -->
  </van-list>
</template>

<script>
// 利用插槽分发数据 参考 http://www.51xuediannao.com/javascript/vue_slot_scope.html
// 作用域插槽 https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD
import { List } from 'vant';

export default {
  name: 'v-scroller-app',
  desc: '可滚动的布局',
  prop: {
    url: {
      type: String,
      default: ''
    }
  },
  components: {
    [List.name]: List
  },
  data () {
    return {
      loading: false,
      finished: false,
      list: []
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 3) {
          this.finished = true;
        }
      }, 500);
    }
  }
}
</script>
