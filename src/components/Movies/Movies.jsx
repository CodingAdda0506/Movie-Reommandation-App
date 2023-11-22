import React from 'react';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/Api';
import MovieList from '../MovieList/MovieList';

const Movies = () => {
  const { data, error, isFetching} = useGetMoviesQuery();
  console.log(data);

  if (isFetching) {
    return (
      <div className="flex justify-center">
        Loading..
      </div>
    )
  }

  if (!data.results.length) {
    return (
      <div className="flex items-center mt-[20px]">
        <h4>No Movies Match That Name</h4>
        <br />Look for Something Else
      </div>
    )
  }

  if (error) return "An Error has Occurred";

  return (
    <div>
      <MovieList movies={data} />
    </div>
  )
}

export default Movies;