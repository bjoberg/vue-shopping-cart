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

<style lang="scss">
.product-action-buttons-container {
  margin: pxToRem(20) pxToRem(0) pxToRem(20) pxToRem(0);
  display: flex;
  flex-direction: row;
}
.product-action-buttons-container > * {
  margin: pxToRem(0) pxToRem(10) pxToRem(0) pxToRem(0);
}
</style>