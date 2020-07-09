const state = {
  cart: []
};

const getters = {
  getShoppingCartLength: state => state.cart.length
};

const actions = {};

const mutations = {
  pushItemToCart: (state, item) => state.cart.push(item),
  popItemFromCart: (state) => state.cart.pop()
};

export default {
  state,
  getters,
  actions,
  mutations
}