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

<style scoped>
.cart {
  margin-right: 2.5rem;
  float: right;
  padding: 0.5rem 2rem;
}
</style>