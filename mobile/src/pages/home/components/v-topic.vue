<style lang="less" scoped>
  @import "~@static/common/style/var.less";

  .jchuati2 {
    height: 2rem;
    width: 2rem;
  }
  .img-msg {
    height: 0.8rem;
    width: 0.8rem;
  }

  .list-span {
    color: @gray-light;
    font-size: @font-size-xl;
  }

  .online {
      display: inline-block;
      padding-left: 12px;
      // font-size: @font-size-l;
      font-weight: 400;
      color: @green;
      background: url('~@static/common/images/online.png') no-repeat center left;
      background-size: 10px 10px;
  }

  .offline {
      display: inline-block;
      padding-left: 12px;
      // font-size: @font-size-l;
      font-weight: 400;
      color: @gray-dark;
      background: url('~@static/common/images/offline.png') no-repeat center left;
      background-size: 10px 10px;
  }

</style>

<template>
    <div class="bg-white color-lighter">
      <v-flex class="padding-ss border-bottom-s">
        <img class="jchuati2" :src="imgIcon" />
        <v-flex-item>精彩话题</v-flex-item>
        <v-flex-item align="right" class="padding-right-m">更多话题</v-flex-item>
      </v-flex>

      <v-image-list class="border-bottom-s" padding="9px" v-for="(item, index) in topicList" :key="index" :path="item.path">
          <img class="img-msg" :src="item.sexImg">
          <span class="list-span margin-left-s">{{item.name}}</span>
          <span class="margin-left-s" :class="item.onlineClass">{{item.onlineText}}</span>
          <span class="float-right">{{item.latestLogin}}</span>
          <div class="margin-top-s overflow-ellipsis-3">{{item.topic}}</div>
      </v-image-list>

    </div>
</template>

<script>
import jchuati2 from '@static/common/images/jchuati2.png';
import boy from '@static/common/images/boy.png';
import girl from '@static/common/images/girl.png';
// api
import TopicApi from '@/apis/home/api-topic';

export default {
  name: 'v-topic',
  desc: '精彩话题',
  data() {
    return {
      imgIcon: jchuati2,
      topicList: []
    };
  },
  created() {
    TopicApi.getTopic().then((res) => {
      // 数据处理
      this.topicList = res.map((value) => {
        // 性别图片处理
        if (value.sex === 'f') {
          value.sexImg = girl;
        } else if (value.sex === 'm') {
          value.sexImg = boy;
        }
        // 在线图片处理
        if (value.online) {
          value.onlineClass = 'online';
          value.onlineText = '在线';
        } else {
          value.onlineClass = 'offline';
          value.onlineText = '不在线';
        }
        return value;
      });
    });
  }
};
</script>
