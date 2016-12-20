<template>
  <div class="page-search">
    <mi-search autofocus v-model="value" :result="filterResult"></mi-search>
  </div>
</template>

<script>

import MiSearch from '../components/MiSearch'

export default {
  name: 'page-search',

  data() {
    return {
      value: '',
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ]
    };
  },
  components:{
    MiSearch
  },

  computed: {
    filterResult() {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
    }
  }
};
</script>

<style lang="css">
  /*.page-search {
    height: 100%;
  }*/
</style>
