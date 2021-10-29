export default function getCategories() {
    return function(dispatch) {
        return fetch('http://localhost:3001/categories')
        .then(response => response.json())
        .then(json => dispatch({type: 'GET_CATS', payload: json}))
        .catch(e => console.error(e));
    }
};