import React, { useState, useEffect } from "react";
import "./MovieRow.css";
import axios from "../axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MovieCard from "./MovieCard";
// import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original";

const MovieRow = ({ title, fetchUrl, isLarge }) => {
  const [movieData, setMovieData] = useState([]);
  const [show, setShow] = useState(false);
  const [getID, setGetID] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const request = await axios.get(fetchUrl);
      // console.log(request);
      setMovieData(request.data.results);
    };
    getMovies();
  }, [fetchUrl]);

  // console.log(show);

  const showMovieDetails = () => {
    setShow(true);
    // setGetID([...getID, idx]);
    // console.log(idx);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <div className="movieRow">
      <h1>{title}</h1>
      <div className={`movieRow_posters`}>
        <ArrowBackIosIcon className="movieRow_arrowLeftIcon" />
        {/* <Link to="/home/moviedetails"> */}
        {movieData.map((movie) => {
          return (
            <>
              <MovieCard key={movie.id} movie={movie} isLarge={isLarge} />
              {/* <div className="movieRow_details">
                <img
                  key={movie?.id}
                  className={`movieRow_poster ${
                    isLarge && "movieRow_posterLarge"
                  }`}
                  onMouseEnter={showMovieDetails}
                  onMouseLeave={() => setShow(false)}
                  src={`${base_url}${
                    isLarge ? movie?.poster_path : movie?.backdrop_path
                  }`}
                  alt={`${movie?.title || movie?.original_title}`}
                />
                {show && (
                  <div className="movieRow_description">
                    <p>{movie?.title || movie?.original_title}</p>
                    <p>{truncate(movie?.overview, 150)}</p>
                  <p>{movie?.vote_average}</p>
                  </div>
                )}
              </div> */}
            </>
          );
        })}
        {/* </Link> */}
        <ArrowForwardIosIcon className="movieRow_arrowRightIcon" />
      </div>
    </div>
  );
};

export default MovieRow;
