import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { 
    productListReducer,
    productDetailsReducer,
} from './reducers/productReducers';

import { cartReducer } from "./reducers/cartReducers";


const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
});

const  cartItemsFromStorage = localStorage.getItem('cartItems') ?
      JSON.parse(localStorage.getItem('cartItems')) : [];

const middleware = [thunk];

const initialState = { cart: { cartItems: cartItemsFromStorage } };

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: composeWithDevTools(),
  preloadedState: initialState,
});

export default store;
