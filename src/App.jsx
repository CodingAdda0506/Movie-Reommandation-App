import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Movies from "./components/Movies/Movies";
import MovieInformation from "./components/MovieInformation/MovieInformation";
import Genre from "./pages/Genre";

const App = () => {
  return (
    <div>
      <main className="">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Movies />}></Route>
            <Route path="/movie/:id" element={<MovieInformation />}></Route>
            <Route path="/genre" element={<Genre />}></Route>
            <Route path="/genre/:id" element={<Genre />}></Route>
          </Routes>
        </Router>
      </main>
    </div>
  );
};

export default App;
