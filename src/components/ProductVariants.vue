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

<style>
.product-variants-container {
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
}
.color-box {
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  border-radius: 4rem;
}

.color-box:hover {
  cursor: pointer;
}
</style>