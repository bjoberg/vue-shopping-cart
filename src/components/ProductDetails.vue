<template>
  <div>
    <h1>{{title}}</h1>
    <div class="chip">{{category}}</div>
    <p>{{price}}</p>
    <p v-if="inStock">In stock</p>
    <p v-else>Out of stock</p>
    <p>{{inventoryCount}} items left.</p>

    <ul>
      <li v-for="(item, index) in itemDetails" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    itemDetails: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    },
    inStock: {
      type: Boolean,
      required: true
    },
    inventoryCount: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.chip {
  border-radius: 30px;
  text-align: center;
  padding: 4px;
  color: white;
  background-color: #16c0b0;
  width: 100px;
}
</style>