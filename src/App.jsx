import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Movies from "./components/Movies/Movies";
import MovieInformation from "./components/MovieInformation/MovieInformation";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Movies />}>
            </Route>
            <Route path="/movie/:id" element={<MovieInformation />}>
            </Route>
          </Routes>
        </Router>
      </main>
    </div>
    // <main className="mx-auto max-w-[1660px]">
    //   <div className="grid h-auto place-content-center gap-10 border px-10 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    //     {/* {Array(15).fill(<Movie />)} */}
    //     {Array(15)
    //       .fill(true)
    //       .map((item, index) => (
    //         <Movie key={index} />
    //       ))}
    //   </div>
    // </main>
  );
};

export default App;
