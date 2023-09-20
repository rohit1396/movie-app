import React, { useState } from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const base_url = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie, isLarge }) => {
  const [show, setShow] = useState(false);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <div className="movieCard">
      <Link to={`/moviedetailspage/${movie?.id}`}>
        <LazyLoadImage
          className="movieCard_img"
          src={`${base_url}${movie?.backdrop_path}`}
          alt={movie?.title || movie?.original_title}
          effect="blur"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        />
      </Link>
      {
        <div
          className={`${show ? "movieCard_show" : "movieCard_hide"}`}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <p className="movieCard_title">{movie?.title}</p>
          <p className="movieCard_overview">{truncate(movie?.overview, 150)}</p>
          <p className="movieCard_rating">Rating : {movie?.vote_average}</p>
        </div>
      }
    </div>
  );
};

export default MovieCard;
