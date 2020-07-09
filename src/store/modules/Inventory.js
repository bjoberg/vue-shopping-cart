import SockGreen from "../../assets/vmSocks-green-onWhite.jpg";
import SockBlue from "../../assets/vmSocks-blue-onWhite.jpg";

const state = {
  inventory: [{
    id: 'OgHzG92ufUypQDHL90hqgw',
    category: "Footwear",
    title: "Socks",
    brand: "Vue Mastery",
    image: SockGreen,
    price: 4.99,
    count: 20,
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
  }]
};

const getters = {
  getInventory: (state) => {
    return state.inventory;
  },
  getProductById: (state) => (id) => {
    console.log(id);
    return state.inventory.find(inventory => inventory.id === id)
  },
  getFormattedPrice: (state, getters) => (id) => {
    const price = getters.getProductById(id).price;
    return `$${price}`;
  }
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
}