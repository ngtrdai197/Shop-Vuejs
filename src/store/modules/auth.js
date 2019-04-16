import API from "../../@core/api";
import Axios from "axios";

const auth = {
    namespaced: true,
    state: {
        isLogin: JSON.parse(localStorage.getItem('state_login')) || false,
        user: {}
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
        LOGIN: (state, payload) => state.user = payload
    },
    actions: {
        SET_IS_LOGIN({ commit }) {
            commit('SET_IS_LOGIN')
        },
        LOGIN({ commit }, user) {
            Axios.post(`${API.HOST}/${API.USER.LOGIN}`, user)
                .then(response => {
                    commit('LOGIN', response.data)
                })
                .catch(err => {
                    throw err;
                })
        }
    }

}
export default auth;
