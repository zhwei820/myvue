<template>
  <div>
    <mi-search autofocus v-model="value" :result="filterResult"></mi-search>
    <mt-swipe :auto="4000">
      <mt-swipe-item class="slide1">
        <a href="https://s1.mi.com/m/ghd/2016/1212/?needValidHost=false">
          <span class="imgurl">
            <img src="//i8.mifile.cn/v1/a1/c55e1cdf-bd01-ff16-aa28-fe5f36774797.webp"/>
          </span>
        </a>
      </mt-swipe-item>

      <mt-swipe-item class="slide1">
        <a href="https://s1.mi.com/m/ghd/2016/1212/?needValidHost=false">
          <span class="imgurl">
            <img src="//i8.mifile.cn/v1/a1/137b7325-fc83-d1ee-e5ae-b7a1a457511b.webp"/>
          </span>
        </a>
      </mt-swipe-item>
    </mt-swipe>


    <div class="wxad">
      <a data-stat-id="ba070f636ac3246f" onclick="_msq.push(['trackEvent', '221a86c5a4688b35-ba070f636ac3246f', '', 'pcpid']);">
        <img src="//i8.mifile.cn/v1/a1/9747e559-38a7-ffe8-f59a-6cf199dd9a55.webp">
      </a>
    </div>

<div v-for="item in defaultResult">
  <pro-list-item></pro-list-item>
</div>



  </div>
</template>

<script>

import MiSearch from '../components/MiSearch'
import ProListItem from '../components/ProListItem'

export default {
  name: 'page-search',

  data() {
    return {
      value: '',
      defaultResult: [
        'Apple',
        'Banana',
        'Banana',
        'Banana',
        'Banana',
        'Banana',
        'Banana',
      ]
    };
  },
  components:{
    MiSearch, ProListItem
  },

  computed: {
    filterResult() {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
    }
  }
};
</script>

<style scoped>
  .mint-swipe {
    height: 207px;
  }
  
  .mint-swipe-item {
    line-height: 207px;
  }
  
  .imgurl img {
    height: 207px;
    width: 100%;
  }
  
  .wxad {
    padding: .1rem 0 0;
  }
  
  .wxad img {
    width: 100%;
    height: auto;
  }
  
  .items img {
    width: 100%;
    height: auto;
  }
  
  .items {
    width: 2.32rem;
    height: 1.53rem;
    display: inline-block;
  }
</style>