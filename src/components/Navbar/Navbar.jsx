import React from "react";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  const value = [
    "val1",
    "val2",
    "val3",
    "val4",
    "val5",
    "val6",
    "val7",
    "val8",
    "val9",
    "val10",
    "val12",
    "val13",
    "val14",
    "val15",
    "val16",
    "val17",
    "val18",
    "val19",
    "val20",
    "val21",
  ];

  return (
    <div className="flex items-center justify-between bg-[#227fb4] px-5 py-5 text-2xl text-white md:px-10">
      {/* <img src="" alt="" srcset=" " /> */}
      <p className="font-bold">MoviesAdda</p>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="hidden w-[200px] rounded-lg bg-[#23262e] py-2 pl-5 pr-10 text-base text-[#9ca3af] outline-none sm:block md:w-[280px]"
        />
        <IoMdSearch className="absolute right-2 top-1/2 hidden -translate-y-1/2 sm:block" />
      </div>
      <select
        value="hari"
        className="w-[130px] rounded-lg bg-[#23262e] px-5 py-2 text-base text-[#9ca3af] outline-none"
      >
        <p>Select a Genre</p>
        {value.map((val) => (
          <option value={val}>{val}</option>
        ))}
      </select>
    </div>
  );
};

export default Navbar;
