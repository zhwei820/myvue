<template>
    <div class="progressBar">
        <div>
            <div>
                <div class="pro-text-total">
                    总需
                    <i>
					8250
				</i> 人次
                </div>
                <div class="pro-text">
                    进度
                    <i>
					22%
				</i>
                </div>
            </div>
            <div>
                <p class="wrap">
                    <span class="bar" style="width: 22%;">
                        <i class="color">
                        </i>
			        </span>
                </p>
            </div>
        </div>
    </div>

</template>


<script>
     export default {
    
  };
</script>

<style lang="css" scoped>
    i {
        font-style: normal;
    }
    
    .progressBar {
        margin: 3px 0;
    }
    
    .pro-text-total {
        font-size: 0.7rem;
        
        display: inline-block;
    }
    
    .pro-text-total i {
        color: #ff4747;
    }
    
    .pro-text {
        display: inline-block;
        float: right;
        white-space: nowrap;
        color: #666;
        font-family: PingFang-SC-Light;
        float: right;
        font-size: 0.7rem;
    }
    
    .pro-text i {
        color: #8097fa;
    }
    
    .goodsList-item .wrap {
        display: inline-block;
        vertical-align: middle;
        font-size: .6rem;
    }
    
    .wrap {
        position: relative;
        height: 8px;
        border-radius: 8px;
        background-color: #efeeef;
        overflow: hidden;
    }
    
    .progressBar .color {
        display: block;
        height: 100%;
        border-radius: 8px;
    }
    
    .progressBar .bar,
    .progressBar .color {
        display: block;
        height: 100%;
        border-radius: 8px;
    }
    
    .progressBar .color {
        width: 100%;
        background: linear-gradient(left, #ff8352, #ff4747);
        background: -webkit-linear-gradient(left, #ff8352, #ff4747);
    }
</style>