import Vue from "vue";
import Vuex from 'vuex';
import product from "./modules/product.js";
import cart from "./modules/cart.js";

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex, VueAxios, axios);
export const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        ProductModule: product,
        CartModule: cart
    }
})