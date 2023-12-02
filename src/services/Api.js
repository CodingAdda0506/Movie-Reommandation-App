// Here we make all the calls to TMDB API
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const page = 1;

export const tmdbAPI = createApi({
  reducerPath: "tmdbAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({

    // Get Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=c643a6685dfefa1bd8e9df8ab94f6004`,
    }),
    // Get movies by type
    getMovies: builder.query({
      query: ({ genreName, page, searchQuery }) => {

        // Search movies
        if(searchQuery){
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=c643a6685dfefa1bd8e9df8ab94f6004`
      }

        // Get movies by Genre
        if (genreName && typeof genreName === 'number') {
          return `discover/movie?with_genres=${genreName}&page=${page}&api_key=c643a6685dfefa1bd8e9df8ab94f6004`
        }
        // Get Popular Movies
        return `movie/popular?page=${page}&api_key=c643a6685dfefa1bd8e9df8ab94f6004`;
      }
    }),
    // Get Movie
    getMovie: builder.query({
      query: (id) =>
        `/movie/${id}?append_to_response=videos,credits&api_key=c643a6685dfefa1bd8e9df8ab94f6004`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery, useGetGenresQuery } = tmdbAPI;
