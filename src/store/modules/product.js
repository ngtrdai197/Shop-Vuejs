import Axios from "axios";

const product = {
    namespaced: true,
    state: {
        products: [],
        product: {},
    },
    getters:{
        FIND_ALL_PRODUCT: state => {
            return state.products;
        }
    },
    mutations: {
        GET_ALL_PRODUCT: (state, payload) => {
            state.products = payload
        },
        FIND_PRODUCT: (state, payload) => {
            state.product = payload
        }
    },
    actions: {
        FETCH_PRODUCTS({ commit }) {
            Axios.get("https://ionic-shop-api.herokuapp.com/product/api")
                .then(response => {
                    commit('GET_ALL_PRODUCT', response.data)
                })
                .catch(err => {
                    throw err;
                })
        },
        FIND_PRODUCT({ commit }, id) {
            Axios.get(`https://ionic-shop-api.herokuapp.com/product/api/${id}`)
                .then(response => {
                    commit('FIND_PRODUCT', response.data[0])
                })
                .catch(err => {
                    throw err;
                })
        }
    }

}
export default product;
