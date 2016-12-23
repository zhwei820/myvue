<template>

    <div class="card3">
        <card></card>
        <card></card>
        <card></card>
    </div>

</template>

<script>

import Card from '../components/Card'

export default {
    components: {
        Card
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .card3 {
        display: flex;
        display: -webkit-flex;
    }
</style>