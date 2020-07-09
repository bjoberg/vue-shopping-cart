<template>
  <div class="product-action-buttons">
    <button
      @click="handleAddToCart"
      :disabled="inventory === 0"
      :class="{disabledButton: inventory === 0 }"
      class="buttonPrimary"
    >Add</button>
    <button
      @click="handleRemoveFromCart"
      :disabled="shoppingCartTotalItems === 0"
      :class="{disabledButton: shoppingCartTotalItems === 0 }"
      class="buttonError"
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
  border-radius: 20px;
  margin-top: 30px;
  margin-right: 10px;
  border: none;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
}

.buttonPrimary {
  background-color: #1e95ea;
}

.buttonError {
  background-color: #ea361e;
}

.disabledButton {
  background-color: #d8d8d8;
}
</style>