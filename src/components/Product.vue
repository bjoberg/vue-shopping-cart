<template>
  <div class="product">
    <div class="product-image">
      <ProductImage :title="title" :imageSrc="product.image" />
    </div>

    <div class="product-info">
      <ProductDetails
        :title="title"
        :price="getFormattedPrice"
        :inStock="inStock"
        :inventoryCount="product.count"
        :itemDetails="product.details"
      />

      <ProductVariants :variants="product.variants" />

      <ProductActionButtons />
    </div>
  </div>
</template>

<script>
import ProductImage from "./ProductImage.vue";
import ProductDetails from "./ProductDetails.vue";
import ProductVariants from "./ProductVariants.vue";
import ProductActionButtons from "./ProductActionButtons.vue";

export default {
  name: "Product",
  components: {
    ProductImage,
    ProductDetails,
    ProductVariants,
    ProductActionButtons
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    shoppingCartTotalItems: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleAddToCart() {
      this.$emit("add-to-cart");
    },
    handleRemoveFromCart() {
      this.$emit("remove-from-cart");
    },
    handleUpdateProductImage(productImage) {
      this.image = productImage;
    }
  },
  computed: {
    inStock() {
      return this.product.count > 0;
    },
    getFormattedPrice() {
      return this.$store.getters.getFormattedPrice(this.product.id);
    },
    title() {
      return `${this.product.brand}: ${this.product.title}`;
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

.product-image {
  width: 80%;
}

.product-image,
.product-info {
  margin-top: 10px;
  width: 50%;
}
</style>