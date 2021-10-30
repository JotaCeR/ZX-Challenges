import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import paginationReducer from "./paginationReducer";

export default combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    pages: paginationReducer,
});