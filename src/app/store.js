// Configure the API from reduxjs toolkit

import { configureStore } from "@reduxjs/toolkit";
import { tmdbAPI } from "../services/Api";
import genreReducer from "../Feature/currentGenre";

export default configureStore({
    reducer: {
        [tmdbAPI.reducerPath]: tmdbAPI.reducer,
        currentGenre: genreReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbAPI.middleware),
})