import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/cartSlice"

export default configureStore({
    reducer: {
        cart: cartReducer
    }
})