<template>
  <div class="page">
    <router-link to="/list">Go To List!</router-link>
    <router-link to="/lazyload">Go To Lazyload!</router-link>
    <counter></counter>
    <p>
      To get started, edit files in <code>./client</code> and save.
    </p>
  </div>
</template>

<script>
import Counter from 'components/Counter'

export default {
  components: {
    Counter
  }
}
</script>
