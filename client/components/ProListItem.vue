<template>

    <div class="prolistitem-wrapper">
        <a href="one://toDetail?proId=448&amp;roundId=183301">
            <i class="ico ico-label ico-label-ten">
	</i>
            <div class="goods goods-ing">
                <div class="goods-pic-fixed">
                    <img src="http://img-cdn.duo17.com/onedata/product/ede861639bf5eb7a5feafc0de793a9f9.jpg" alt="">
                </div>
                <div class="goods-info">
                    <p class="goods-title f-txtabb">
                        苹果iPhone 7 128G
                    </p>

                    <pro-progress></pro-progress>

                </div>
            </div>
        </a>

    </div>

</template>



<script>

import ProProgress from '../components/ProProgress'

     export default {
         components: {
             ProProgress
         }    
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .prolistitem-wrapper {
        display: box;
        display: -webkit-box;
        box-flex: 1;
        -webkit-box-flex: 1;
        border-right: 1px solid #ebebeb;
        border-bottom: 1px solid #ebebeb;
        box-sizing: border-box;
    }
    
    a {
        text-decoration: none;
        color: #333;
    }
    
    .goods-ing {
        padding-top: 8px;
    }
    .goods-pic-fixed {
        width: 100px;
        margin: 0 auto;
    }
    
    .goods-info {
        padding: 3px 15px 7px;
    }
    
    .goods-title {
        display: -webkit-box;
        height: 1.8rem;
        line-height: .9rem;
        font-size: .6rem;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-align: justify;
    }
    
    .goods-info p {
        margin: 0;
    }
    img{
        width: 100%;
        height: auto;
    }
</style>