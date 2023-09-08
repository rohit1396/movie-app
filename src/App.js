import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import MovieDetailsPage from "./components/MovieDetailsPage";
import SearchPage from "./components/SearchPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/searchpage"
          element={
            <>
              <Navbar />
              <SearchPage />
            </>
          }
        />
        <Route
          path="/moviedetailspage/:movieId"
          element={
            <>
              <Navbar />
              <MovieDetailsPage />
            </>
          }
        />
        <Route
          path="/home/moviedetailspage/:movieId"
          element={
            <>
              <Navbar />
              <MovieDetailsPage />
            </>
          }
        />
        <Route
          path="/searchpage/moviedetailspage/:movieId"
          element={
            <>
              <Navbar />
              <MovieDetailsPage />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
