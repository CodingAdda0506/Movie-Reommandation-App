import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
            <Route path="/" element={<Movies />}></Route>
            <Route path="/movie/:id" element={<MovieInformation />}></Route>
          </Routes>
        </Router>
      </main>
    </div>
  );
};

export default App;
