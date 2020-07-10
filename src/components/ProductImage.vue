<template>
  <div>
    <img class="product-image" :alt="title" :src="imageSrc" />
  </div>
</template>

<script>
export default {
  name: "ProductImage",
  props: {
    title: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
img.product-image {
  border: pxToRem(1) solid #d8d8d8;
  width: 70%;
  margin: pxToRem(4);
  box-shadow: pxToRem(0) pxToRem(0.5) pxToRem(1) #d8d8d8;
}
</style>