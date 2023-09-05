import React, { useState, useEffect } from "react";
import requests from "../requests";
import "./MovieCover.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const base_url = "https://image.tmdb.org/t/p/original/";
const url = "https://api.themoviedb.org/3";

const MovieCover = () => {
  const [index, setIndex] = useState(0);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(`${url}${requests.fetchTrending}`);
    const newMovie = await response.json();
    console.log(newMovie);
    setMovies(newMovie.results);
  };
  console.log(movies);

  useEffect(() => {
    getMovies();
  }, [index]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const prevMovie = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = movies.length - 1;
      }
      return index;
    });
    console.log(index);
  };

  const nextMovie = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > movies.length - 1) {
        index = 0;
      }
      return index;
    });
    console.log(index);
  };

  console.log(movies);
  console.log(index);

  return (
    <div className="movieCover_container">
      <div>
        {movies.map((movie, movieIndex) => {
          // const { backdrop_path, overview, original_title } = movie[index];

          let position = "nextSlide";

          if (movieIndex === index) {
            position = "activeSlide";
          }

          if (
            movieIndex === index - 1 ||
            (index === 0 && index === movie.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <header
              className={position}
              style={{
                backgroundSize: "cover",
                backgroundImage: `linear-gradient(0deg, transparent, rgba(37, 37, 37, 0.61), #111 ), url(${base_url}${movie?.backdrop_path})`,
                backgroundPosition: "center center",
              }}
            >
              <div className="movieCover_content">
                <h2 className="movieCover_title">{movie?.original_title}</h2>
                <p className="movieCover_description">
                  {truncate(movie?.overview, 150)}
                </p>
                <div className="movieCover_buttons">
                  <button className="movieCover_button">Play</button>
                  <button className="movieCover_button">My List </button>
                </div>
                {/* <div className="movieCover_fadeBottom"></div> */}
              </div>
            </header>
          );
        })}
        <ArrowBackIosIcon
          className="prevArrow arrowButton"
          onClick={prevMovie}
        />
        <ArrowForwardIosIcon
          className="nextArrow arrowButton"
          onClick={nextMovie}
        />
      </div>
    </div>
  );
};

export default MovieCover;
