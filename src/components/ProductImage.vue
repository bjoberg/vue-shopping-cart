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

<style>
img.product-image {
  border: 1px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
}
</style>