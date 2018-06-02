<template>
  <div id="app">
    <!-- <el-progress :percentage="percentage" :show-text="false" :stroke-width="4" class="lh-0"></el-progress> -->
    <router-view/>
  </div>
</template>

<script>
// import NProgress from 'nprogress'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  mounted: function () {
    // 两种选择，1、使用router 2、使用vuex
    // NProgress.start()
    // setTimeout(() => NProgress.done(), 3000)
  },
  methods: {

  }
}
</script>
