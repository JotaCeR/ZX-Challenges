let initialState = {
    categories: null
};

export default function categoriesReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_CATS':
            return {
                ...state,
                categories: action.payload
            };
        default:
            return state;
    }
};