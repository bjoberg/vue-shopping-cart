<template>
  <div class="product-action-buttons-container">
    <Button
      @on-click="handleAddToCart"
      :isDisabled="inventoryCount === 0"
      variant="primary"
      title="Add"
    />
    <Button
      @on-click="handleRemoveFromCart"
      :isDisabled="shoppingCartTotalItems === 0"
      variant="secondary"
      title="Remove"
    />
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "ProductActionButtons",
  props: {
    shoppingCartTotalItems: {
      type: Number,
      required: true
    },
    inventoryCount: {
      type: Number,
      required: true
    }
  },
  components: {
    Button
  },
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
.product-action-buttons-container {
  margin: 2rem 0 2rem 0;
  display: flex;
  flex-direction: row;
}
.product-action-buttons-container > * {
  margin: 0 1rem 0 0;
}
</style>