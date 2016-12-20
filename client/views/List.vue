<template>
  <div class="htmlBox" :style="{ height: wrapperHeight + 'px' }">
    <div class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
      <list-item v-for="item in list"></list-item>
    </div>
    <p v-show="loading" class="page-infinite-loading">
      <mt-spinner type="fading-circle"></mt-spinner>
      加载中...
    </p>
  </div>
</template>

<script>
import ListItem from 'components/ListItem'

export default {
  data(){
    return {
      list: [],
      loading: false,
        allLoaded: false,
        wrapperHeight: 0
    }
  },
  components: {
    ListItem
  },
    methods: {
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 250);
      }
    },

    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight ;
      for (let i = 1; i <= 10; i++) {
        this.list.push(i);
      }
    }
}
</script>

<style scoped>
  .htmlBox {
        position: relative;
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        max-width: 640px;
    }
</style>