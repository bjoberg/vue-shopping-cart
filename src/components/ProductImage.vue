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
  border: 0.1rem solid #d8d8d8;
  width: 70%;
  margin: 4rem;
  box-shadow: 0 0.05rem 0.1rem #d8d8d8;
}
</style>