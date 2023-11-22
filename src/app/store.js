// Configure the API from reduxjs toolkit

import { configureStore } from "@reduxjs/toolkit";
import { tmdbAPI } from "../services/Api";

export default configureStore({
    reducer: {
        [tmdbAPI.reducerPath]: tmdbAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbAPI.middleware),
})