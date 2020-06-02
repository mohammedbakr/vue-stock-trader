<template>
  <div class="col-sm-6 col-md-4">
    <div class="card mb-4" style="border-color: yellowgreen">
      <div class="card-header">
        <h5 class="card-title">
          {{stock.name}}
          <small class="text-muted">(Price: {{stock.price}})</small>
        </h5>
      </div>
      <div class="card-body d-flex">
        <input
          type="number"
          min="0"
          class="form-control mr-2"
          :class="{'danger': insufficientFunds}"
          placeholder="Quantity" 
          v-model="quantity"
        />
        <button
          :class="{'btn btn-success btn-sm': !insufficientFunds, 'btn btn-danger btn-sm': insufficientFunds}" 
          @click="buyStock"
          :disabled="insufficientFunds || +quantity <= 0 || !Number.isInteger(+quantity)"
        >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stock",
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    buyStock() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: +this.quantity
      }
      this.$store.dispatch('buyStock', order);
      this.quantity = 0;
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      // return true(disabled) or false(available)
      return this.quantity * this.stock.price > this.funds;
    }
  }
};
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>