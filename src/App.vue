<template>
  <div id="app">
    <NavBar />
    <Cart :totalItems="getShoppingCartLength" />
    <Product
      v-for="inventory in getInventory"
      :key="inventory.id"
      :product="inventory"
      :shoppingCartTotalItems="getShoppingCartLength"
      @add-to-cart="pushItemToCart"
      @remove-from-cart="popItemFromCart"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

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
  methods: mapMutations(["pushItemToCart", "popItemFromCart"]),
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
