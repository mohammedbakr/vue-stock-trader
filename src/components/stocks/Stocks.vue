<template>
  <div class="container">
    <div class="row mt-4">
      <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
import { mapGetters } from "vuex";

export default {
  name: "Stocks",
  components: {
    appStock: Stock
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'stocks'
    ])
  }
};
</script>

<style scoped>
</style>