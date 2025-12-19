import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "./middleware/logger";



export const store = configureStore({
    reducer: {
        product: productReducer, 
    cartItems: cartReducer, 
    wishLists: wishListReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger)
});