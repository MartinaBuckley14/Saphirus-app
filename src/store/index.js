import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/cartSlice"
import { shopApi } from "../Services/Shop";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware)
})

setupListeners(store.dispatch);

export default store;