function buildCart(new_purchases) {
    return function(dispatch) {
        return dispatch({type: "BUILD_CART", payload: new_purchases});
    }
};

function getCart() {
    return function(dispatch) {
        return dispatch({type: 'GET_CART'});
    }
};

function setCart() {
    return function(dispatch) {
        return dispatch({type: 'SET_CART'});
    }
};

function resCart() {
    return function(dispatch) {
        return dispatch({type: 'RES_CART'});
    }
};

module.exports = {
    buildCart,
    getCart,
    setCart,
    resCart,
}