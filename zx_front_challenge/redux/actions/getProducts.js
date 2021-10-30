export default function getProducts(page_num) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/products?_page=${page_num}&_limit=10`)
        .then(response => response.json())
        .then(json => dispatch({type: 'GET_PRODS', payload: json}))
        .catch(error => console.error(error));
    }
};