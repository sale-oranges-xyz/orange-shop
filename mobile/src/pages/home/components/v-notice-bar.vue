<style lang="less" scoped>

</style>

<template>
  <van-notice-bar background="#fff" color="#666"
    left-icon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png">
      {{notice}}
  </van-notice-bar>
</template>

<script>
import { NoticeBar } from 'vant';
// api
import NoticeApi from '@/apis/home/api-notice';

export default {
  name: 'v-notice-bar',
  desc: '通告栏',
  components: {
    [NoticeBar.name]: NoticeBar
  },
  data() {
    return {
      notice: ''
    };
  },
  created() {
    NoticeApi.getNotice().then((res) => {
      this.notice = res;
    });
  }
};
</script>
