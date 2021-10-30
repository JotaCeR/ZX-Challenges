export default function getProducts() {
    return function(dispatch) {
        return fetch('http://localhost:3001/products')
        .then(response => response.json())
        .then(json => dispatch({type: 'GET_PRODS', payload: json}))
        .catch(error => console.error(error));
    }
};