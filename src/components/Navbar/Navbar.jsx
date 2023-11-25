import React from "react";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGetGenresQuery } from "../../services/Api";

const Navbar = () => {
  const { data, isFetching } = useGetGenresQuery();
  console.log(data);

  return (
    <div className="mx-auto flex items-center justify-center bg-[#227fb4] px-5 py-5">
      <div className="flex w-full max-w-[1660px] items-center justify-between text-2xl text-white md:px-10">
        {/* <img src="" alt="" srcset=" " /> */}
        <Link to="/">
          <p className="font-bold">MoviesAdda</p>
        </Link>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="hidden w-[200px] rounded-lg bg-[#23262e] py-2 pl-5 pr-10 text-base text-[#9ca3af] outline-none sm:block md:w-[280px]"
          />
          <IoMdSearch className="absolute right-2 top-1/2 hidden -translate-y-1/2 sm:block" />
        </div>
        <select className="w-[130px] rounded-lg bg-[#23262e] px-5 py-2 text-base text-[#9ca3af] outline-none">
          {/* {isFetching ? (
              <h5>Loading..</h5>
            ) : (
              data.genres.map(({ name, id }) => (
                <Link key={name} to="/">
                  <div onClick={() => {}}>
                    <div>
                      <img
                        src={genreIcons[name.toLowerCase()]}
                        alt="genreIcons"
                        width={30}
                        height={30}
                      />
                    </div>
                    <p>{name}</p>
                  </div>
                </Link>
              ))
            )} */}
          {data?.genres.map(({ name, id }) => (
            <option value="" className="">
              <Link key={name} to="/">
                {name}
              </Link>
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Navbar;
