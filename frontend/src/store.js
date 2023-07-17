import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from './reducers/productReducers';


const rootReducer = combineReducers({
  productList: productListReducer,
});

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: composeWithDevTools(),
});

export default store;
