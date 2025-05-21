import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/cartSlice"
import authReducer from "../features/User/userSlice"
import { shopApi } from "../Services/Shop";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../Services/AuthApi";


const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        [shopApi.reducerPath] : shopApi.reducer,
        [authApi.reducerPath] : authApi.reducer
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware).concat(authApi.middleware)
})

setupListeners(store.dispatch);

export default store;