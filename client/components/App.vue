<template>
  <div id="app">
    <router-link class="page-back" v-if="visible" :to="'/'">
      <i class="mintui mintui-back"></i>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<style>
  body {
    margin: 0;
    font-size: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, helvetica, 'helvetica neue', Ubuntu, 'segoe ui', arial, sans-serif;
  }
  
  .page {
    text-align: center;
    /* nesting for the need to test postcss */
    code {
      background-color: #f0f0f0;
      padding: 3px 5px;
      border-radius: 2px;
    }
  }
  
  .page-back {
    display: inline-block;
    position: absolute 12px * * 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    i {
      font-size: 24px;
      line-height: 40px;
    }
  }
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
