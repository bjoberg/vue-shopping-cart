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

<style>
.shopping-cart-item-container {
  display: flex;
  flex-direction: row;
  margin: 40px;
  border: 1px solid black;
}
img.shopping-cart-item-image {
  border: 1px solid #d8d8d8;
  max-width: 200px;
  margin: 40px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
}
</style>