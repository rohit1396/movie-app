import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./MovieCover.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const base_url = "https://image.tmdb.org/t/p/original/";

const MovieCover = () => {
  useEffect(() => {
    const getMovies = async () => {
      const request = await axios.get(requests.fetchTrending);
      console.log(request);
      setMovie(
        request.data.results[
          // movie
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      console.log(movie);
    };
    getMovies();
  }, []);

  const [movie, setMovie] = useState([]);
  return (
    <header
      className="movieCover"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <ArrowBackIosIcon />
      <div className="movieCover_content">
        <h2 className="movieCover_title">
          {movie?.original_title || movie?.title}
        </h2>
        <p className="movieCover_description">{movie?.overview}</p>
      </div>
      <ArrowForwardIosIcon />
    </header>
  );
};

export default MovieCover;
