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
        padding: 0 0 3px;
    }
    
    .index-header .search_bar {
        line-height: .2rem;
    }
    
    .index-header .search_bar>a {
        display: block;
        padding: 10px 15px 16px;
        margin-top: 5px;
    }
   
    .mintui-search {
        font-size: 1.5rem;
        color: #CACACA;
        padding-right: 10px;
    }
    
    .text {
        font-size: 1.2rem;
        color: #9C9C9C;
    }
    
    .index-header .search_bottom {
        border: 1px solid #E3E3E3;
        margin: 0 2px;
        height: 4px;
        border-top: 0;
    }
</style>