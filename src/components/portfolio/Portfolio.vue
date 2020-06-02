<template>
  <div class="row mt-4">
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from '../portfolio/Stock.vue';

export default {
  name: 'Portfolio',
  components: {
    appStock: Stock
  },
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  }
}
</script>

<style scoped>

</style>