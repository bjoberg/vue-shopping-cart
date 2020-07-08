import VueX from 'vuex';
import Vue from 'vue';
import ShoppingCart from './modules/ShoppingCart';

// Load Vuex
Vue.use(VueX);

// Create store
export default new VueX.Store({
  modules: {
    ShoppingCart
  }
});