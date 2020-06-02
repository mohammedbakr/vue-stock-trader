<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Stock Trader</router-link>
    <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->

    <div class="navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" to="/portfolio" active-class="active" class="nav-item"><a class="nav-link">Portfolio</a></router-link>
        <router-link tag="li" to="/stocks" active-class="active" class="nav-item"><a class="nav-link">Stocks</a></router-link>
      </ul>
      <strong class="navbar-text ml-auto">Funds = {{ funds | currency }}</strong>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item"><a href="#" @click="endDay" class="nav-link">End Day</a></li>
        <li class="nav-item dropdown"
            @click="isDropdownOpen = !isDropdownOpen">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Save / Load</a>
          <div 
            class="dropdown-menu"
            :class="{'show': isDropdownOpen}"
            aria-labelledby="navbarDropdown"
          >
            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
            <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'Header',
  data() {
    return {
      isDropdownOpen: false
    }
  },
  methods: {
    ...mapActions({
      rndStocks: 'rndStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.rndStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put('data.json', data);
    },
    loadData() {
      this.fetchData();
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style scoped>
.navbar-brand {
  padding-bottom: 9px;
}
</style>