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
  margin-top: 5px;
}
.color-box {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 40px;
}

.color-box:hover {
  cursor: pointer;
}
</style>