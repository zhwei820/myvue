<template>
  <div id="app">
    <router-link class="page-back" v-if="visible" :to="'/'">
      <i class="mintui mintui-back"></i>
    </router-link>
    <router-view></router-view>


    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="外卖">
        <img slot="icon" src="http://c1.mifile.cn/f/i/f/mishop/iic/xp.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="http://c1.mifile.cn/f/i/f/mishop/iic/xp.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="http://c1.mifile.cn/f/i/f/mishop/iic/xp.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="http://c1.mifile.cn/f/i/f/mishop/iic/xp.png">
        我的
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<style>
 
</style>


<script>
  // import 'src/asset/font/iconfont.css';

  export default {
    data(){
      return {
        selected:1,
      }
    },
    computed: {
      visible() {
        return ['/', '/header', '/search', '/mi'].indexOf(this.$route.path) < 0;
      }
    }
  };
</script>

<style>
  .mint-tabbar{
    z-index: 1000!important;
  } 
</style>