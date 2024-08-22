import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import themeReducer from "./features/Theme/themeSlice"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage,
}

const rootReducer = combineReducers({
    theme: themeReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)