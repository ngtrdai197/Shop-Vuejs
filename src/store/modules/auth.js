// import API from "../../@core/api";
// import Axios from "axios";

const auth = {
    namespaced: true,
    state: {
        isLogin: JSON.parse(localStorage.getItem('state_login')) || false,
        user: JSON.parse(localStorage.getItem('user')) || {}
    },
    getters: {
        GET_IS_LOGIN: state => state.isLogin,
        GET_USER_LOGIN: state => state.user
    },
    mutations: {
        SET_IS_LOGIN: state => {
            state.isLogin = (state.isLogin === true) ? (state.isLogin = false) : (state.isLogin = true)
            localStorage.setItem('state_login', state.isLogin)
        },
        LOGIN: (state, payload) => {
            state.user = payload
            localStorage.setItem('user', JSON.stringify(payload))
        },
        SIGN_OUT: () => {
            localStorage.removeItem('user')
        }
    },
    actions: {
        SET_IS_LOGIN({ commit }) {
            commit('SET_IS_LOGIN')
        },
        LOGIN({ commit }, user) {
            commit('LOGIN', user)
        },
        SIGN_OUT({ commit }) {
            commit('SIGN_OUT');
        }
    }

}
export default auth;
