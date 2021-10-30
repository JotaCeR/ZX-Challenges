let initialState = {
    purchases: []
};

export default function shoppingCartReducer(state = initialState, action) {
    switch (action.type) {
        case "BUILD_CART":
            const newCart = [...state.purchases];

            if (typeof action.payload === Array) {
                action.payload.forEach(item => newCart.push(item));
            } else {
                newCart.push(action.payload)
            };

            return {...state, purchases: newCart};
        case "GET_CART":
            const cart = window.localStorage.getItem('SiempreEnCasa_cart');
            return cart ? {...state, purchases: JSON.parse(cart)} : {...state, purchases: []};
        case "SET_CART":
            window.localStorage.setItem('SiempreEnCasa_cart', JSON.stringify(state.purchases))
            return state;
        case "RES_CART":
            return {...state, purchases: []};
        default:
            return state;
    }
};