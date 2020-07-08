<template>
  <div class="product">
    <div class="product-image">
      <img alt="product image" :src="image" />
    </div>

    <div class="product-info">
      <h1>{{title}}</h1>
      <p v-if="inStock">In stock</p>
      <p v-else>Out of stock</p>
      <p>{{inventory}} items left.</p>
      <p>Shipping: {{ shipping }}</p>

      <ul>
        <li v-for="(item, index) in details" :key="index">{{item}}</li>
      </ul>

      <div
        class="color-box"
        :style="{ backgroundColor: variant.color}"
        v-for="variant in variants"
        :key="variant.id"
        @mouseover="handleUpdateProductImage(variant.image)"
      ></div>

      <button
        @click="handleAddToCart"
        :disabled="inventory === 0"
        :class="{disabledButton: inventory === 0 }"
      >Add</button>
      <button
        @click="handleRemoveFromCart"
        :disabled="cart === 0"
        :class="{disabledButton: cart === 0 }"
      >Remove</button>
    </div>
  </div>
</template>

<script>
import SockGreen from "../assets/vmSocks-green-onWhite.jpg";
import SockBlue from "../assets/vmSocks-blue-onWhite.jpg";

export default {
  name: "Product",
  props: {
    premium: {
      type: Boolean,
      required: true
    },
    cart: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      image: SockGreen,
      inventory: 20,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          id: 1,
          color: "blue",
          image: SockBlue
        },
        {
          id: 2,
          color: "green",
          image: SockGreen
        }
      ]
    };
  },
  methods: {
    handleAddToCart() {
      this.$emit("add-to-cart");
      this.inventory -= 1;
    },
    handleRemoveFromCart() {
      this.$emit("remove-from-cart");
      this.inventory += 1;
    },
    handleUpdateProductImage(productImage) {
      this.image = productImage;
    }
  },
  computed: {
    inStock() {
      return this.inventory > 0;
    },
    title() {
      return `${this.brand} ${this.product}`;
    },
    shipping() {
      if (this.premium) return "free";
      return "$2.99";
    }
  }
};
</script>

<style scoped>
.product {
  display: flex;
  flex-flow: wrap;
  padding: 1rem;
}

img {
  border: 1px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
}

.product-image {
  width: 80%;
}

.product-image,
.product-info {
  margin-top: 10px;
  width: 50%;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

button {
  margin-top: 30px;
  border: none;
  background-color: #1e95ea;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
}

.disabledButton {
  background-color: #d8d8d8;
}
</style>