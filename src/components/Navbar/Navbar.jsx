import React from "react";
import { IoMdSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useGetGenresQuery } from "../../services/Api";
import { useDispatch, useSelector } from "react-redux";
import selectGenre from "../../Feature/currentGenre";

const Navbar = () => {

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
        <Link to={`/genre`} className="w-[130px] rounded-lg bg-[#23262e] px-5 py-2 text-base text-[#9ca3af]">
          Select Genre
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
