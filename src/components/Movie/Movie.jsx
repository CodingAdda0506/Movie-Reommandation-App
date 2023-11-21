import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function RatingStar() {
  const stars = 4.2;
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

const Movie = () => {
  return (
    <div className="grid place-content-center">
      <div className="h-[450px] w-[250px]">
        <div className="overflow-hidden rounded-2xl bg-contain">
          <img src="./black-panther-web.jpg" alt="Movie Poster" />
        </div>
        <div className="h-auto">
          <p className="balance mt-4 w-full overflow-hidden overflow-ellipsis whitespace-nowrap px-4 text-white">
            Black Panther: Long Live The King
          </p>
          {RatingStar()}
        </div>
      </div>
    </div>
  );
};

export default Movie;
