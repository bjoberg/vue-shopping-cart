<template>
  <div id="app">
    <NavBar />
    <Cart :totalItems="getShoppingCartLength" />
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

import NavBar from "./components/NavBar.vue";
import Product from "./components/Product.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Product,
    Cart
  },
  computed: mapGetters(["getInventory", "getShoppingCartLength"])
};
</script>

<style>
body {
  font-family: tahoma;
  color: #282828;
  margin: 0px;
}
</style>
