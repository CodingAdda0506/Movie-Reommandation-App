import React from "react";
import { useGetGenresQuery } from "../../services/Api";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectGenre } from "../../Feature/currentGenre";
import genreIcons from "../../assets/genres";

const Sidebar = () => {
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();
  // const { genreName } = useSelector((state) => state.currentGenre);

  console.log(data);

  return (
    <div className="flex h-full w-full items-center overflow-x-scroll px-5">
      {isFetching ||
        data?.genres.map(({ name, id }) => (
          <Link
            key={id}
            to={`/genre/${name}`}
            value={id}
            className="mr-2 grid place-content-center rounded-lg border px-2 py-2 text-white"
          >
            <div
              className="flex items-center justify-center"
              onClick={() => dispatch(selectGenre(id))}
            >
              <div className="mr-2">
                <img
                  src={genreIcons[name.toLowerCase()]}
                  width={30}
                  height={30}
                  className="mr-5 text-white invert"
                />
              </div>
              <p className="whitespace-nowrap">{name}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Sidebar;
