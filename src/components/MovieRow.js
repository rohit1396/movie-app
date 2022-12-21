import React, { useState, useEffect } from "react";
import "./MovieRow.css";
import axios from "../axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const base_url = "https://image.tmdb.org/t/p/original";

const MovieRow = ({ title, fetchUrl, isLarge }) => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovieData(request.data.results);
    };
    getMovies();
  }, [fetchUrl]);

  return (
    <div className="movieRow">
      <h1>{title}</h1>
      <div className={`movieRow_posters`}>
        <ArrowBackIosIcon className="movieRow_arrowLeftIcon" />
        {movieData.map((movie) => {
          return (
            // <ul>
            <img
              key={movie?.id}
              className={`movieRow_poster ${isLarge && "movieRow_posterLarge"}`}
              src={`${base_url}${
                isLarge ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={`${movie?.title || movie?.original_title}`}
            />
            // </ul>
          );
        })}
        <ArrowForwardIosIcon className="movieRow_arrowRightIcon" />
      </div>
    </div>
  );
};

export default MovieRow;
