<template>
  <div id="app">
    <NavBar />
    <Cart :totalItems="getShoppingCartTotalItems" />
    <Product
      :premium="premium"
      :cart="cart"
      @add-to-cart="addToCart"
      @remove-from-cart="removeFromCart"
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
  data: function() {
    return {
      premium: true,
      cart: 0
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    }
  },
  computed: mapGetters(["getShoppingCartTotalItems"])
};
</script>

<style>
body {
  font-family: tahoma;
  color: #282828;
  margin: 0px;
}
</style>
