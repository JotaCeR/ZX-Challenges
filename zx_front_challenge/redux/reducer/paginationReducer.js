let initialState = {
    page_number: 1
};

export default function paginationReducer(state = initialState, action) {
    switch (action.type) {
        case 'NEXT_PAGE':
            return {
                ...state,
                page_number: action.payload
            };
        case 'PREV_PAGE':
            return {
                ...state,
                page_number: action.payload
            };
        case 'PAGE_ONE':
            return {
                ...state,
                page_number: 1
            };
        default:
            return state;
    }
};