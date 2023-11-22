import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function RatingStar(rating) {
  const stars = rating / 2;
  const ratingStar = Array.from({ length: 5 }, (element, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="text-base text-yellow-500" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="text-base text-yellow-500" />
        ) : (
          <AiOutlineStar className="text-base text-yellow-500" />
        )}
      </span>
    );
  });

  return (
    <div className="mt-2 flex items-center justify-center">{ratingStar}</div>
  );
}

const Movie = ({ movie, index }) => {

  return (
    <div className="grid place-content-center">
      <div className="h-[450px] w-[250px]">
        <div className="overflow-hidden rounded-2xl bg-contain">
          <img
            src={movie.poster_path ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://www.fillmurray.com/200/300'}
            alt={movie.title}
          />
        </div>
        <div className="h-auto">
          <p className="balance mt-4 w-full overflow-hidden overflow-ellipsis whitespace-nowrap px-4 text-white">
            {movie.title}
          </p>
          {RatingStar(movie.vote_average)}
        </div>
      </div>
    </div>
  );
};

export default Movie;
