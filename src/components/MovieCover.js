import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./MovieCover.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const base_url = "https://image.tmdb.org/t/p/original/";

const MovieCover = () => {
  const [select, setSelect] = useState(0);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const request = await axios.get(requests.fetchTrending);
      console.log(request);
      setMovie(
        request.data.results[select]
        // movie
        // Math.floor(Math.random() * request.data.results.length - 1)
      );
      console.log(movie);
    };
    getMovies();
  }, []);

  useEffect(() => {
    getNextMovie();
  }, [select]);

  // const [select, setSelect] = useState(0);
  // const [movie, setMovie] = useState([]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const getNextMovie = () => {
    select < movie.length - 1 && setSelect(select + 1);
    console.log(select);
  };

  return (
    <header
      className="movieCover"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(0deg, transparent, rgba(37, 37, 37, 0.61), #111 ),url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <ArrowBackIosIcon className="prevArrow arrowButton" />
      <div className="movieCover_content">
        <h2 className="movieCover_title">
          {movie?.original_title || movie?.title}
        </h2>
        <p className="movieCover_description">
          {truncate(movie?.overview, 150)}
        </p>
        <div className="movieCover_buttons">
          <button className="movieCover_button">Play</button>
          <button className="movieCover_button">My List</button>
        </div>
        {/* <div className="movieCover_fadeBottom"></div> */}
      </div>
      <ArrowForwardIosIcon
        className="nextArrow arrowButton"
        onClick={getNextMovie}
      />
    </header>
  );
};

export default MovieCover;
