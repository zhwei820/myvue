<template>
  <div id="app">
    <router-link class="page-back" v-if="visible" :to="'/'">
      <i class="mintui mintui-back"></i>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<style>
 
</style>


<script>
  // import 'src/assets/font/iconfont.css';

  export default {
    computed: {
      visible() {
        return ['/', '/header', '/search', '/mi'].indexOf(this.$route.path) < 0;
      }
    }
  };
</script>
