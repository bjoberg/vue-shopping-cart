<template>
  <div class="cart">
    <p>Cart {{ totalItems }}</p>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    totalItems: {
      type: Number,
      required: false,
      default: 0
    }
  }
};
</script>

<style scoped>
.cart {
  margin-right: 25px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 5px 20px;
}
</style>