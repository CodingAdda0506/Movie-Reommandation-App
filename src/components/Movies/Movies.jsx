import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetGenresQuery, useGetMoviesQuery } from '../../services/Api';
import MovieList from '../MovieList/MovieList';
import { selectGenre } from '../../Feature/currentGenre';
import Pagination from '../Pagination/Pagination';

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreName, searchQuery } = useSelector((state) => state.currentGenre);
  const { data, error, isFetching } = useGetMoviesQuery({ genreName, page, searchQuery });

  if (isFetching) {
    return (
      <div className="flex justify-center">
        <img src="./loader.svg" alt="loader.." />
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
      <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
    </div>
  )
}

export default Movies;