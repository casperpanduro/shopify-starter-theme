/**
 * state
 */
const state = {
    open: false,
    cart_count: 0,
    cart: {}
}

/**
 * getters
 */
const getters = {}

/**
 * mutations
 */
const mutations = {
    OPEN (state) {
        state.open = true;
    },
    CLOSE (state) {
        state.open = false
    },
    SET_CART(state, cart) {
        state.cart = cart;
    }
}

/**
 * actions
 */
const actions = {
    open({commit}) {
        commit('OPEN');
    },
    close({commit}) {
        commit('CLOSE');
    },
    getCart() {
        
    }
}

/**
 * export
 */
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
