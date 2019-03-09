const cart = {
    namespaced: true,
    state: {
        carts: JSON.parse(localStorage.getItem('carts')) || [],
        quantity: localStorage.getItem('count') || 0
    },
    getters: {
        GET_ALL_CART: state => {
            return state.carts
        }
    },
    mutations: {
        ADD_CART: (state, payload) => {
            if (state.carts.length > 0) {
                const index = state.carts.findIndex(x => x._id === payload._id)
                if (index !== -1) {
                    state.carts[index].Quantity++
                    localStorage.setItem('carts', [])
                    localStorage.setItem('carts', JSON.stringify(state.carts))
                } else {
                    state.carts.push(payload)
                    localStorage.setItem('carts', [])
                    localStorage.setItem('carts', JSON.stringify(state.carts))
                }
            } else {
                state.carts.push(payload)
                localStorage.setItem('carts', [])
                localStorage.setItem('carts', JSON.stringify(state.carts))
            }
            state.quantity++
            localStorage.setItem('count', state.quantity)
        },
        CLEAR_CART: (state) => {
            localStorage.clear()
            state.carts = []
            state.quantity = 0
        }
    },
    actions: {
        ADD_CART({ commit }, product) {
            commit('ADD_CART', product)
        },
        CLEAR_CART({ commit }) {
            commit('CLEAR_CART')
        }
    }

}
export default cart;
