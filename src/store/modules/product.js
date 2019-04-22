import Axios from "axios";
import API from "../../@core/api";

const product = {
    namespaced: true,
    state: {
        products: [],
        product: {},
    },
    getters: {
        FIND_ALL_PRODUCT: state => state.products
    },
    mutations: {
        GET_ALL_PRODUCT: (state, payload) => state.products = payload,
        FIND_PRODUCT: (state, payload) => state.product = payload,
        ADD_PRODUCT: (state, payload) => {
            state.products.push(payload)
        }
    },
    actions: {
        FETCH_PRODUCTS({ commit }) {
            Axios.get(`${API.HOST}/${API.PRODUCT.GET_ALL}`).then(response => {
                commit('GET_ALL_PRODUCT', response.data)
            }).catch(err => {
                throw err;
            })
        },
        FIND_PRODUCT({ commit }, id) {
            Axios.get(`${API.HOST}/${API.PRODUCT.GET_ALL}/${id}`).then(response => {
                commit('FIND_PRODUCT', response.data[0])
            }).catch(err => {
                throw err;
            })
        },
        ADD_PRODUCT({ commit }, product) {
            Axios.post(`${API.HOST}/${API.PRODUCT.ADD_PRODUCT}`, product).then(response => {
                commit('ADD_PRODUCT', response.data[0])
            }).catch(err => {
                throw err;
            })
        }
    }

}
export default product;
