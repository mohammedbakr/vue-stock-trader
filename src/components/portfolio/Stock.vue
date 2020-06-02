<template>
  <div class="col-sm-6 col-md-4">
    <div class="card mb-4" style="border-color: skyblue">
      <div class="card-header">
        <h5 class="card-title">
          {{stock.name}}
          <small class="text-muted">(Price: {{stock.price}} | Quantity: {{ stock.quantity }})</small>
        </h5>
      </div>
      <div class="card-body d-flex">
        <input
          type="number"
          min="0"
          class="form-control mr-2"
          :class="{'danger': insufficientQuantity}"
          placeholder="Quantity" 
          v-model="quantity"
        />
        <button
          class="brn-sm"
          :class="{'btn btn-success': !insufficientQuantity, 'btn btn-danger': insufficientQuantity}" 
          @click="sellStock"
          :disabled="insufficientQuantity || +quantity <= 0 || !Number.isInteger(+quantity)"
        >{{ insufficientQuantity ? 'Insufficient Quantity' : 'Sell' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'Stock',
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    ...mapActions({
      sellStockActtion:'sellStock'
    }),
    sellStock() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: +this.quantity
      }
      this.sellStockActtion(order);
      this.quantity = 0;
    }
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  }
};
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
