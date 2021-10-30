let initialState = {
    all_products: null
};

export default function productsReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_PRODS':
            return {
                ...state,
                all_products: action.payload
            };
            default:
                return state;
    }
};