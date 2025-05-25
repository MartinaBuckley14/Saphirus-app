import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/cartSlice"
import authReducer from "../features/User/userSlice"
import { shopApi } from "../Services/Shop";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../Services/AuthApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['cart','auth']
}

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
    [shopApi.reducerPath] : shopApi.reducer,
    [authApi.reducerPath] : authApi.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PAUSE', 'persist/FLUSH', 'persist/PURGE', 'persist/REGISTER']
        }
    })
    .concat(shopApi.middleware)
    .concat(authApi.middleware)
})

export const persistor = persistStore(store)

setupListeners(store.dispatch);