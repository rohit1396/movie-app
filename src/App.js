import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import MovieDetailsPage from "./components/MovieDetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/home/moviedetails" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
