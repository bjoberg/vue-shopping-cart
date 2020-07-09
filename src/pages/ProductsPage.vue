<template>
  <div>
    <Product
      v-for="inventory in getInventory"
      :key="inventory.id"
      :product="inventory"
      :shoppingCartTotalItems="getShoppingCartLength"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Product from "../components/Product.vue";

export default {
  name: "ProductsPage",
  components: {
    Product
  },
  computed: mapGetters(["getInventory", "getShoppingCartLength"])
};
</script>

<style>
</style>