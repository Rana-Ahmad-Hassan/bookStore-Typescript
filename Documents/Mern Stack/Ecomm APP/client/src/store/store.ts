import { configureStore } from "@reduxjs/toolkit";
import { getBestSellerProducts } from "../features/categorieSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { getAllProducts } from "../features/productSlice";


export const store = configureStore({
    reducer: {
        [getBestSellerProducts.reducerPath]: getBestSellerProducts.reducer,
        [getAllProducts.reducerPath]:getAllProducts.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(getBestSellerProducts.middleware,getAllProducts.middleware);
    }
})

setupListeners(store.dispatch);