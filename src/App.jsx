import React from "react";
import Movie from "./components/Movie/Movie";

const App = () => {
  return (
    <main className="mx-auto max-w-[1660px]">
      <div className="grid h-auto place-content-center gap-10 border px-10 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {/* {Array(15).fill(<Movie />)} */}
        {Array(15)
          .fill(true)
          .map((item, index) => (
            <Movie key={index} />
          ))}
      </div>
    </main>
  );
};

export default App;
