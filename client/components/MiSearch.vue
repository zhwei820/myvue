<template>

    <div class="index-header">
        <div class="search_bar">
            <router-link to="/search/index">
                <span class="mintui mintui-search"></span><span class="text">搜索商品名称</span>
            </router-link>

        </div>
        <div class="search_bottom"></div>
    </div>
</template>


<script>
     export default {
    
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .index-header {
        background: #FFF;
        padding: 0 0 .1rem;
    }
    
    .index-header .search_bar {
        line-height: .34rem;
    }
    
    .index-header .search_bar>a {
        display: block;
        padding: .2rem .3rem .12rem;
    }
    
    .icon-search {
        font-size: .4rem;
        color: #CACACA;
        padding-right: .1rem;
    }
    
    .text {
        font-size: .3rem;
        color: #9C9C9C;
    }
    
    .index-header .search_bottom {
        border: 1px solid #E3E3E3;
        margin: 0 .2rem;
        height: .08rem;
        border-top: 0;
    }
</style>