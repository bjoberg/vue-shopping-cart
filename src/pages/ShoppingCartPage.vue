<template>
  <div>
    <ShoppingCartItem
      v-for="(product, index) in getShoppingCart"
      :key="index"
      :title="product.title"
      :price="getFormattedPrice(product.id)"
      :imageSrc="product.image"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import ShoppingCartItem from "../components/ShoppingCartItem.vue";

export default {
  name: "ShoppingCartPage",
  components: {
    ShoppingCartItem
  },
  computed: mapGetters(["getShoppingCart", "getFormattedPrice"])
};
</script>

<style>
</style>