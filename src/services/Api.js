// Here we make all the calls to TMDB API
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const page = 1;

export const tmdbAPI = createApi({
    reducerPath: 'tmdbAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
    endpoints: (builder) => ({
        // Get movies by type
        getMovies: builder.query({
            query: () => `movie/popular?page=${page}&api_key=c643a6685dfefa1bd8e9df8ab94f6004`
        }),
    })
});

export const {
    useGetMoviesQuery,
} = tmdbAPI;