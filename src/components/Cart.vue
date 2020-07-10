<template>
  <div class="cart">
    <p>
      <router-link to="cart">Cart {{ getShoppingCartLength }}</router-link>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  computed: mapGetters(["getShoppingCartLength"])
};
</script>

<style lang="scss">
.cart {
  margin-right: pxToRem(25);
  float: right;
  padding: pxToRem(5) pxToRem(20);
}
</style>