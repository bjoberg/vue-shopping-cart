<template>
  <div>
    <div
      class="color-box"
      :style="{ backgroundColor: variant.color}"
      v-for="variant in variants"
      :key="variant.id"
      @mouseover="handleUpdateProductImage(variant.image)"
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
  }
};
</script>

<style>
.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}
</style>