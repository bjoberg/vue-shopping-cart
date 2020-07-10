<template>
  <div class="product-variants-container">
    <div
      class="color-box"
      :style="{ backgroundColor: variant.color}"
      v-for="variant in variants"
      :key="variant.id"
      @click="handleUpdateProductImage(variant.image)"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ProductVariants",
  props: {
    variants: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    }
  },
  methods: {
    handleUpdateProductImage(imageSrc) {
      this.$emit("update-product-image", imageSrc);
    }
  }
};
</script>

<style lang="scss">
.product-variants-container {
  display: flex;
  flex-direction: row;
  margin-top: pxToRem(5);
}
.color-box {
  width: pxToRem(40);
  height: pxToRem(40);
  margin-right: pxToRem(1);
  border-radius: pxToRem(40);
}

.color-box:hover {
  cursor: pointer;
}
</style>