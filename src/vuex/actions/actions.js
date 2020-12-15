import axios from "axios";

export default {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios('http://localhost:3000/products', {
            method: "GET"
        })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
            .catch((error) => {
                return error;
            })
    },
    ADD_TO_CART({commit}, product) {
        commit('SET_CART', product);
    },
    DELETE_FROM_CART({commit}, index) {
        commit('REMOVE_FROM_CART', index)
    },
    PLUS_ITEM_CART({commit}, index) {
        commit('PLUS_ITEM', index);
    },
    MINUS_ITEM_CART({commit}, index) {
        commit('MINUS_ITEM', index);
    }
}
