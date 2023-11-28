import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Movies from "../components/Movies/Movies";
import { useGetGenresQuery } from "../services/Api";

const Genre = () => {
  const { data } = useGetGenresQuery();

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="h-[100px] w-full">
        <Sidebar />
      </div>
      <div className="w-full">
        <Movies movie={data} />
      </div>
    </div>
  );
};

export default Genre;
