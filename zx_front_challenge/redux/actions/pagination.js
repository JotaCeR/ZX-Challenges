function nextPage(current_page) {
    return function(dispatch) {
        const new_page_number = current_page + 1;
        const new_page = {type: 'NEXT_PAGE', payload: new_page_number};
        return dispatch(new_page);
    }
};

function prevPage(current_page) {
    return function(dispatch) {
        let new_page_number;
        if (current_page === 1) {
            return dispatch({type: 'PAGE_ONE'});
        } else {
            new_page_number = current_page - 1;
        }
        const prev_page = {type: 'PREV_PAGE', payload: new_page_number};
        return dispatch(prev_page);
    }
};

module.exports = {
    nextPage,
    prevPage
};