<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar
  },
  computed: mapGetters(["getInventory", "getShoppingCartLength"])
};
</script>

<style>
body {
  font-family: tahoma;
  color: #282828;
  margin: 0;
}
</style>
