import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { articleApi } from './article';
const Store = configureStore({
    reducer:{
        [articleApi.reducerPath] : articleApi.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(articleApi.middleware)
});

export default Store;