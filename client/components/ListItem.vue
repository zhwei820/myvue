<template>
    <li>
        <div class="author-box">
            <img src="https://imgs.bipush.com/auth/data/avatar/2.jpg!40x40?imageView2/1/w/40/h/40/|imageMogr2/strip/interlace/1/quality/85/format/jpg">
            <a href="/member/32208.html" class="author-a1">曲凯</a>
        </div>
        <router-link to="/">
            <div class="article-md-img-box">
                <img src="https://imgs.bipush.com/article/cover/201509/25/091649399823.jpg?imageView2/1/w/290/h/218/|imageMogr2/strip/interlace/1/quality/85/format/jpg">
            </div>
            <div class="article-info-box">
                <div class="article-md-title">一个王兴换三个陈欧，一个滴滴换十个小红书</div>
            </div>
        </router-link>
        <div class="article-info-time">
            <span>6小时前</span>
            <span class="pull-right"><i class="i-new-vip icon-v-bubble"></i>9</span>
        </div>
    </li>

</template>

<script>
     export default {
    
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    li {
        display: inline-block;
        background: #ffffff;
        width: 100%;
        position: relative;
        padding: 0 1rem;
        min-height: 100px;
        font-size: 0;
        vertical-align: top;
        margin-bottom: 0.25rem;
        overflow: hidden;
    }
    
    .author-box {
        font-size: 0.6rem;
        color: #bbbbbb;
        margin: 0.65rem 0;
        position: relative;
        white-space: nowrap;
        line-height: 0.8rem;
        text-align: left;
    }
    
    .author-box img {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        vertical-align: top;
    }
    
    .article-info-box {
        padding-left: 8rem;
        font-size: 0.85rem;
        line-height: 1.25rem;
        color: #333;
        height: 5.45rem;
        width: 100%;
    }
    
    .article-info-time {
        color: #bbb;
        margin: 0.75rem 0;
        font-size: 0.6rem;
        line-height: 1;
        text-align: left;
    }
    
    .article-md-img-box {
        float: left;
        width: 7.25rem;
        height: 5.45rem;
        overflow: hidden;
        position: relative;
        z-index: 10;
    }
    
    img {
        width: 100%;
    }
    
    title {
        height: 5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
</style>