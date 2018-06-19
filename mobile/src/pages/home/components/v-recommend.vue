<style lang="less" scoped>
  @import "~@static/common/style/var.less";
  .van-tabbar {
    height: 40px;
    position: relative;
  }
  .van-tabbar-item {
    font-size: @font-size-l;
  }
  .van-list{
    padding-right: 8px;
    min-height: 50vh;
    .image-block {
      padding: 8px 0 0 8px;
    }
  }
  .sex-img {
    width: 18px;
    margin-right: @distance-s;
  }
  .color-light{
      word-break: keep-all;
  }
</style>

<template>
  <div>
    <van-tabbar v-model="active" class="border-bottom-s">
      <van-tabbar-item>推荐会员</van-tabbar-item>
      <van-tabbar-item>最新会员</van-tabbar-item>
      <van-tabbar-item>鲜花榜</van-tabbar-item>
    </van-tabbar>

    <!--推荐会员-->
    <div v-show="active===0">
      <keep-alive v-if="active===0">
        <v-van-list :url="recommedUrl" :params="{type: recommendType.member}">
          <template slot-scope="scope">

            <v-image-block class="image-block" v-show="scope.$index % 3 === 0" :path="recommendMem.timg3">
              <v-flex class="bg-white padding-s">
                <img :src="girlSrc" class="sex-img">
                <v-flex-item><span class="color-light font-size-m">不归路°</span></v-flex-item>
                <v-flex-item align="right"><span class="color-pink font-size-xl">26岁</span></v-flex-item>
              </v-flex>
            </v-image-block>

            <v-image-block class="image-block" v-show="scope.$index % 3 === 1" :path="recommendMem.timg4">
              <v-flex class="bg-white padding-s">
                <img :src="girlSrc" class="sex-img">
                <v-flex-item><span class="color-light font-size-m">背对背的走</span></v-flex-item>
                <v-flex-item align="right"><span class="color-pink font-size-xl">27岁</span></v-flex-item>
              </v-flex>
            </v-image-block>

            <v-image-block class="image-block" v-show="scope.$index % 3 === 2" :path="recommendMem.timg5">
              <v-flex class="bg-white padding-s">
                <img :src="girlSrc" class="sex-img">
                <v-flex-item><span class="color-light font-size-m">情绪疯子</span></v-flex-item>
                <v-flex-item align="right"><span class="color-pink font-size-xl">25岁</span></v-flex-item>
              </v-flex>
            </v-image-block>
          </template>
        </v-van-list>
      </keep-alive>
    </div>
    <!--最新会员-->
    <div v-show="active===1">
      <keep-alive v-if="active===1">
        <v-van-list :url="recommedUrl" :params="{type: recommendType.newest}">
          <template slot-scope="scope">
            <v-image-block class="image-block" v-show="scope.$index % 3 === 2" :path="recommendNewest.timg6">
              <v-flex class="bg-white padding-s">
                <img :src="boySrc" class="sex-img">
                <v-flex-item><span class="color-light font-size-m">情绪疯子</span></v-flex-item>
                <v-flex-item align="right"><span class="color-pink font-size-xl">25岁</span></v-flex-item>
              </v-flex>
            </v-image-block>

            <v-image-block class="image-block" v-show="scope.$index % 3 === 2" :path="recommendNewest.timg7">
              <v-flex class="bg-white padding-s">
                <img :src="boySrc" class="sex-img">
                <v-flex-item><span class="color-light font-size-m">情绪疯子</span></v-flex-item>
                <v-flex-item align="right"><span class="color-pink font-size-xl">25岁</span></v-flex-item>
              </v-flex>
            </v-image-block>

            <v-image-block class="image-block" v-show="scope.$index % 3 === 2" :path="recommendNewest.timg8">
              <v-flex class="bg-white padding-s">
                <img :src="boySrc" class="sex-img">
                <v-flex-item><span class="color-light font-size-m">情绪疯子</span></v-flex-item>
                <v-flex-item align="right"><span class="color-pink font-size-xl">25岁</span></v-flex-item>
              </v-flex>
            </v-image-block>
          </template>
        </v-van-list>
      </keep-alive>
    </div>
    <!--鲜花榜-->
    <div v-show="active===2">
      <keep-alive v-if="active===2">
        <v-van-list :url="recommedUrl" :params="{type: recommendType.bestPopular}">
          <template slot-scope="scope">
            <v-image-block class="image-block" v-show="scope.$index % 3 === 2" :path="recommendPopular.timg9">
              <v-flex class="bg-white padding-s">
                <img :src="girlSrc" class="sex-img">
                <v-flex-item><span class="color-light font-size-m">情绪疯子</span></v-flex-item>
                <v-flex-item align="right"><span class="color-pink font-size-xl">25岁</span></v-flex-item>
              </v-flex>
            </v-image-block>

            <v-image-block class="image-block" v-show="scope.$index % 3 === 2" :path="recommendPopular.timg10">
              <v-flex class="bg-white padding-s">
                <img :src="girlSrc" class="sex-img">
                <v-flex-item><span class="color-light font-size-m">情绪疯子</span></v-flex-item>
                <v-flex-item align="right"><span class="color-pink font-size-xl">25岁</span></v-flex-item>
              </v-flex>
            </v-image-block>

            <v-image-block class="image-block" v-show="scope.$index % 3 === 2" :path="recommendPopular.timg11">
              <v-flex class="bg-white padding-s">
                <img :src="boySrc" class="sex-img">
                <v-flex-item><span class="color-light font-size-m">情绪疯子</span></v-flex-item>
                <v-flex-item align="right"><span class="color-pink font-size-xl">25岁</span></v-flex-item>
              </v-flex>
            </v-image-block>
          </template>
        </v-van-list>
      </keep-alive>
    </div>
  </div>
</template>

<script>
// components
import { Tabbar, TabbarItem } from 'vant';
import VImageBlock from '@/components/v-image-block';
// api
import RecommendApi from '@/apis/home/api-recommend';
// images
import timg3 from '@static/common/images/timg3.jpg';
import timg4 from '@static/common/images/timg4.jpg';
import timg5 from '@static/common/images/timg5.jpg';
import girl from '@static/common/images/girl.png';
import boy from '@static/common/images/boy.png';

import timg6 from '@static/common/images/timg6.jpg';
import timg7 from '@static/common/images/timg7.jpg';
import timg8 from '@static/common/images/timg8.jpg';

import timg9 from '@static/common/images/timg9.jpg';
import timg10 from '@static/common/images/timg10.jpg';
import timg11 from '@static/common/images/timg11.jpg';

export default {
  name: 'v-recommend',
  desc: '推荐会员',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [VImageBlock.name]: VImageBlock
  },
  data() {
    return {
      active: 0,
      recommedUrl: `${RecommendApi.url}`, // 这是模板语法
      recommendType: RecommendApi.type,
      recommendMem: {
        timg3: timg3,
        timg4: timg4,
        timg5: timg5
      },
      recommendNewest: {
        timg6: timg6,
        timg7: timg7,
        timg8: timg8
      },
      recommendPopular: {
        timg9: timg9,
        timg10: timg10,
        timg11: timg11
      },
      girlSrc: girl,
      boySrc: boy
    };
  }
};
</script>
