// Importing functions and objects from Redux Toolkit and redux-persist
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "redux";

// Importing the API slice and the authentication reducer
import { apiSlice } from "src/features/api/apiSlice.js";
import authReducer from "src/features/auth/authReducer.js";

// Combine reducers from different slices into a single root reducer
let reducers = combineReducers({
    // The API slice's reducer is added under a dynamic key
    [apiSlice.reducerPath]: apiSlice.reducer,
    // The auth reducer is added under the 'authData' key
    authData: authReducer
});

// Configuration object for redux-persist
const persistConfig = {
    key: "root", // The key for the persisted state in the storage
    storage, // The storage engine (localStorage in web environments)
    whitelist: ["authData"], // Only 'authData' will be persisted
};

// Enhance the root reducer with persistence capabilities
const persistedReducer = persistReducer(persistConfig, reducers);

// Configure the Redux store
const store = configureStore({
    reducer: persistedReducer, // Use the persisted reducer
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable checks for non-serializable values
        }).concat(apiSlice.middleware), // Add the API slice's middleware
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in non-production environments
});

// Create a persistor for the store which will be used to control the persistence capabilities
const persistor = persistStore(store);

// Setup listeners for automatic refetching in RTK Query
setupListeners(store.dispatch);

// Export the configured store and persistor
export { store, persistor };
