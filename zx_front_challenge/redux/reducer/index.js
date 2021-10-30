import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import paginationReducer from "./paginationReducer";
import shoppingCartReducer from "./shoppingCart";

export default combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    pages: paginationReducer,
    shopping_cart: shoppingCartReducer,
});