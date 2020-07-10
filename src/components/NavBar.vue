<template>
  <div class="nav-bar">
    <Cart />
  </div>
</template>

<script>
import Cart from "./Cart";

export default {
  name: "NavBar",
  components: {
    Cart
  }
};
</script>

<style lang="scss">
.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: pxToRem(60);
  margin-bottom: pxToRem(15);
}
</style>