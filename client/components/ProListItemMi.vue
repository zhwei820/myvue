<template>
    <div>
        <a class="item" href="/#/product/list?id=354" data-stat-id="b3883d4c6dc02658" onclick="_msq.push(['trackEvent', '221a86c5a4688b35-b3883d4c6dc02658', '/#/product/list?id=354', 'pcpid']);">
            <div class="img">
                <img class="ico lazy" data-src="//i8.mifile.cn/v1/a1/73d581f3-3d92-e7f5-a44a-4ed3203cd16f.webp" src="//i8.mifile.cn/v1/a1/73d581f3-3d92-e7f5-a44a-4ed3203cd16f.webp"
                    style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                <!--vue-if-->
            </div>
            <div class="info">
                <div class="name">
                    <p>
                        红米手机3S
                    </p>
                </div>
                <div class="brief">
                    <p>
                        指纹识别 / 全网通双卡双待 / 金属机身 / 4100mAh大电池
                    </p>
                </div>
                <div class="price">
                    <p>
                        699元 起
                    </p>
                </div>
            </div>
        </a>
        <!--v-repeat-body.items-->
    </div>

</template>



<script>

export default {
    components: {
    }    
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .item {
        float: left;
        width: 100%;
        /*display: box;
        display: -webkit-box;
        box-align: center;
        -webkit-box-align: center;*/
        padding: .3rem 0;
        border-bottom: 1px solid #F2F2F2;
    }
    
    .img {
        width: 146px;
        height: 83px;
        position: relative;
        display: inline-block;
    }
    
    img {
        width: 100%;
        height: auto;
    }
    
    .info {
        width: 250px;
        margin-right: 5px;
        display: inline-block;
        
    }
    
    .name {
        font-size: 17px;
        color: #000;
        margin-bottom: .1rem;
    }
    
    .brief {
        font-size: 15px;
        /*line-height: .34rem;*/
        color: #969696;
        margin-bottom: 5px;
    }
    
    .price {
        font-size: 16px;
        color: #FE4900;
    }
</style>