import React, { useState, useEffect, useRef } from "react";
import "./MovieRow.css";
import axios from "../axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "react-lazy-load-image-component/src/effects/blur.css";
import MovieCard from "./MovieCard";

const MovieRow = ({ title, fetchUrl, isLarge }) => {
  const scrollMovie = useRef(null);
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const request = await axios.get(fetchUrl);
      setMovieData(request.data.results);
    };
    getMovies();
  }, [fetchUrl]);

  const scrollToLeft = () => {
    if (scrollMovie.current) {
      scrollMovie.current.scrollLeft -= 500; // Adjust the scroll distance as needed
    }
    console.log("left Arrow Clicked");
  };

  const scrollToRight = () => {
    if (scrollMovie.current) {
      scrollMovie.current.scrollLeft += 500; // Adjust the scroll distance as needed
    }
    console.log("Right Arrow Clicked");
  };

  return (
    <div className="movieRow">
      <h1>{title}</h1>
      <div className={`movieRow_posters`}>
        <ArrowBackIosIcon
          className="movieRow_arrowLeftIcon"
          onClick={scrollToLeft}
        />
        <div className="movieRow_images" ref={scrollMovie}>
          {movieData.map((movie) => {
            return (
              <div className="moviecard">
                <MovieCard movie={movie} isLarge={isLarge} />
              </div>
            );
          })}
        </div>
        <ArrowForwardIosIcon
          className="movieRow_arrowRightIcon"
          onClick={scrollToRight}
        />
      </div>
    </div>
  );
};

export default MovieRow;
