import React from "react";

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
    <div className="text-white text-2xl bg-[#227fb4] flex justify-between items-center px-10 py-5">
      {/* <img src="" alt="" srcset=" " /> */}
      <p className="font-bold">MoviesAdda</p>
      <input
        type="text"
        placeholder="Search..."
        className="px-5 py-3 bg-[#23262e] rounded-lg outline-none text-[#9ca3af] text-base w-[280px]"
      />
      <select className="text-black w-[130px] bg-[#23262e] text-[#9ca3af] px-5 py-2 rounded-lg outline-none">
        <p>Select a Genre</p>
        {value.map((val) => (
          <option value={val}>{val}</option>
        ))}
      </select>
    </div>
  );
};

export default Navbar;
