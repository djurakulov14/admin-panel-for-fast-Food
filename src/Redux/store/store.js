import {
    configureStore
} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    persistStore
} from 'redux-persist';
import burgers from "../features/burgers/burgersSlice";
import desserts from "../features/desserts/dessertsSlice";
import souses from "../features/souses/souses";
import salads from "../features/salads/saladsSlice";
import pizzas from "../features/pizzas/pizzas";
import cartReducer from "../features/cart/cartSlice";
import liquids from "../features/liquid/liquidSlice";


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    reducer: {
        burgers: burgers,
        salads: salads,
        liquid: liquids,
        pizzas: pizzas,
        souses: souses,
        desserts: desserts,
        cart: persistedReducer
    }
})

export const persistor = persistStore(store)