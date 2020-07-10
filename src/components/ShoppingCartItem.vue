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
  margin: 4rem;
  border: 0.1rem solid black;
}
img.shopping-cart-item-image {
  border: 0.1rem solid #d8d8d8;
  max-width: 20rem;
  margin: 4rem;
  box-shadow: 0 0.05rem 0.1rem #d8d8d8;
}
</style>