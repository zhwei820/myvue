<template>

    <div class="prolistitem2">
        <pro-list-item></pro-list-item>
        <pro-list-item></pro-list-item>
    </div>

</template>



<script>

import ProListItem from '../components/ProListItem'

     export default {
         components: {
             ProListItem
         }    
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .prolistitem2 {
        display: flex;
        display: -webkit-flex;
    }
    
</style>