<template>
  <div class="shopping-cart-item-container">
    <img class="shopping-cart-item-image" :alt="title" :src="imageSrc" />
    <div>
      <h1>{{title}}</h1>
      <p>{{price}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCartItem",
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
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
.shopping-cart-item-container {
  display: flex;
  flex-direction: row;
  margin: pxToRem(40);
  border: pxToRem(1) solid black;
}
img.shopping-cart-item-image {
  border: pxToRem(1) solid #d8d8d8;
  max-width: pxToRem(200);
  margin: pxToRem(40);
  box-shadow: pxToRem(0) pxToRem(0.5) pxToRem(1) #d8d8d8;
}
</style>