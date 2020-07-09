<template>
  <div class="product-action-buttons">
    <button
      @click="handleAddToCart"
      :disabled="inventory === 0"
      :class="{disabledButton: inventory === 0 }"
    >Add</button>
    <button
      @click="handleRemoveFromCart"
      :disabled="shoppingCartTotalItems === 0"
      :class="{disabledButton: shoppingCartTotalItems === 0 }"
    >Remove</button>
  </div>
</template>

<script>
export default {
  name: "ProductActionButtons",
  methods: {
    handleAddToCart() {
      this.$emit("push-to-cart");
    },
    handleRemoveFromCart() {
      this.$emit("pop-from-cart");
    }
  }
};
</script>

<style>
button {
  margin-top: 30px;
  border: none;
  background-color: #1e95ea;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
}

.disabledButton {
  background-color: #d8d8d8;
}
</style>